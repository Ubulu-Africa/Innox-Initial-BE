import { Document } from 'mongoose';

export interface IChallenge extends Document {
  title: string;
  description: string;
  longDescription: string;
  reward: string;
  category: string;
  deadline: string;
  imageUrl: string;
  challengeProcess1: string;
  challengeProcess2: string;
  challengeProcess3: string;
  challengeProcess4: string;
  challengeProcess5: string;
}
