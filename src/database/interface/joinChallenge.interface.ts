import { Document } from 'mongoose';

export interface IJoinChallenge extends Document {
  userId: string;
  challengeId: string;
}
