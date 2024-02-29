import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeDTO, JoinChallengeDTO } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';

@ApiTags('Challenge')
@ApiBearerAuth()
@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get('')
  @HttpCode(HttpStatus.CREATED)
  getChallenges() {
    return this.challengeService.getChallenges();
  }

  @Get('/:challengeId')
  @HttpCode(HttpStatus.OK)
  getChallenge(@Param('challengeId') challengeId: string) {
    return this.challengeService.getChallenge(challengeId);
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  createChallenge(@Body() payload: ChallengeDTO) {
    return this.challengeService.createChallenge(payload);
  }

  @UseGuards(AuthGuard)
  @Post('join-challenge')
  @HttpCode(HttpStatus.OK)
  joinChallenge(@Body() payload: JoinChallengeDTO, @Req() req) {
    return this.challengeService.joinChallenge(payload, req.user._id);
  }

  @UseGuards(AuthGuard)
  @Get('/auth/:challengeIdAuth')
  @HttpCode(HttpStatus.OK)
  getChallengeAuth(
    @Param('challengeIdAuth') challengeIdAuth: string,
    @Req() req,
  ) {
    return this.challengeService.getChallengeAuth(
      challengeIdAuth,
      req.user._id,
    );
  }
}
