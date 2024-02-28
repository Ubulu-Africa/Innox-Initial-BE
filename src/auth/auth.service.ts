import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon from 'argon2';

import { IUser } from 'src/database/interface';
import { SignupDTO } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectModel('User') private userModel: Model<IUser>,
  ) {}

  async signup(payload: SignupDTO) {
    try {
      const userExists = await this.userExist(payload.email);

      if (userExists) {
        throw new ForbiddenException(
          'An account with this email address already exists',
        );
      }

      let hashedPassword: string = '';
      if (payload.role !== 'seeker') {
        hashedPassword = await argon.hash(payload.password);
      }

      const user = await this.userModel.create({
        ...payload,
        password: hashedPassword,
      });

      let accessToken;
      if (user.role !== 'seeker') {
        accessToken = await this.signToken(user._id, user.email, user.role);
      }

      return {
        message: 'Account created successfully',
        user,
        accessToken,
      };
    } catch (error) {
      throw error;
    }
  }

  // UTILS

  // Check if user exists
  async userExist(email: string): Promise<any> {
    const parent = await this.userModel.findOne({
      email,
    });

    return parent;
  }

  // Sign JWT
  async signToken(id: number, email: string, role: string): Promise<string> {
    const payload = { id, email, role };

    const accessToken = await this.jwt.signAsync(payload);

    return accessToken;
  }
}
