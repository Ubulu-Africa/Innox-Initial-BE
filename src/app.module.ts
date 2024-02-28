import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengeModule } from './challenge/challenge.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://darmesah:darmesah@cluster0.4udrgem.mongodb.net/innox',
    ),
    DatabaseModule,
    AuthModule,
    ChallengeModule,
  ],
})
export class AppModule {}
