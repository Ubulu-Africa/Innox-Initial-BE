import { Document } from 'mongoose';

export interface IUser extends Document {
  role: 'solver' | 'seeker' | 'evaluator';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  interests: string;
  industry: string;
  companyName: string;
  projectBudget: string;
  projectTimeline: string;
  projectDetails: string;
  highestQualification: string;
}
