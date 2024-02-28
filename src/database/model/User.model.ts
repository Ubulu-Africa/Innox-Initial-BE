import mongoose from 'mongoose';
import { IUser } from '../interface/index';

const { Schema } = mongoose;
export const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: ['solver', 'seeker', 'evaluator'],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    interests: {
      type: String,
    },
    industry: {
      type: String,
    },
    companyName: {
      type: String,
    },
    projectBudget: {
      type: String,
    },
    projectTimeline: {
      type: String,
    },
    projectDetails: {
      type: String,
    },
    highestQualification: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>('User', UserSchema);

export { User };
