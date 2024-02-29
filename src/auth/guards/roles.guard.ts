import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true; // No role specified, allow access
    }

    // Extract access token from request headers
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header is missing.');
    }

    const accessToken = authorizationHeader.split(' ')[1]; // Assuming JWT is in Authorization header

    // Verify and decode the access token
    const payload = this.jwtService.verify(accessToken);
    const userRole = payload.role; // Assuming 'role' field in JWT payload

    // Validate user role against required roles
    if (Array.isArray(requiredRoles)) {
      if (requiredRoles.some((role) => userRole !== role)) {
        throw new UnauthorizedException('Invalid or expired access token.');
      }

      return requiredRoles.some((role) => userRole === role); // Check if user has any required role
    } else {
      return userRole === requiredRoles; // Check for exact required role (single case)
    }
  }
}
