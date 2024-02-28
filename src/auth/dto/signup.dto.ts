import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class SignupDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @IsEnum({ SEEKER: 'seeker', SOLVER: 'solver', EVALUATOR: 'evaluator' })
  role: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  interests: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  industry: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  companyName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  projectBudget: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  projectTimeline: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  projectDetails: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  highestQualification: string;
}
