import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/database/model/User.model';
import { AuthModule } from 'src/auth/auth.module';
import { ChallengeSchema } from 'src/database/model/Challenge.model';
import { JoinChallengeSchema } from 'src/database/model/JoinChallenge.model';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Challenge', schema: ChallengeSchema }]),
    MongooseModule.forFeature([
      { name: 'JoinChallenge', schema: JoinChallengeSchema },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
