import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengeModule } from './challenge/challenge.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://darmesah:darmesah@cluster0.4udrgem.mongodb.net/innox',
    ),
    DatabaseModule,
    AuthModule,
    ChallengeModule,
    UserModule,
  ],
})
export class AppModule {}
