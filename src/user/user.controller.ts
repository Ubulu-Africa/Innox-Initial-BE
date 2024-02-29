import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  getChallenges(@Req() req) {
    return this.userService.getProfile(req.user._id);
  }

  @Get('dashboard')
  @HttpCode(HttpStatus.OK)
  getDashboard(@Req() req) {
    return this.userService.getDashboard(req.user);
  }
}
