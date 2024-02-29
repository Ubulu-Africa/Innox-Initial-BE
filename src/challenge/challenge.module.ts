import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { ChallengeSchema } from 'src/database/model/Challenge.model';
import { MongooseModule } from '@nestjs/mongoose';
import { JoinChallengeSchema } from 'src/database/model/JoinChallenge.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Challenge', schema: ChallengeSchema }]),
    MongooseModule.forFeature([
      { name: 'JoinChallenge', schema: JoinChallengeSchema },
    ]),
  ],
  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class ChallengeModule {}
