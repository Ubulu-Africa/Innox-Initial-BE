import mongoose, { Schema } from 'mongoose';
import { IJoinChallenge } from '../interface/index';

export const JoinChallengeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      unique: false,
    },
    challengeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Challenge',
      unique: false,
    },
  },
  {
    timestamps: true,
  },
);

const JoinChallenge = mongoose.model<IJoinChallenge>(
  'JoinChallenge',
  JoinChallengeSchema,
);

export { JoinChallenge };
