import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ChallengeDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  longDescription: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  reward: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  deadline: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  challengeProcess1: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  challengeProcess2: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  challengeProcess3: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  challengeProcess4: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  challengeProcess5: string;
}
