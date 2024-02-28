import mongoose from 'mongoose';
import { IChallenge } from '../interface/index';

const { Schema } = mongoose;
export const ChallengeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    reward: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    challengeProcess1: {
      type: String,
    },
    challengeProcess2: {
      type: String,
    },
    challengeProcess3: {
      type: String,
    },
    challengeProcess4: {
      type: String,
    },
    challengeProcess5: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Challenge = mongoose.model<IChallenge>('Challenge', ChallengeSchema);

export { Challenge };
