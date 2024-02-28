import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Challenge')
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
}
