import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class JoinChallengeDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  challengeId: string;
}
