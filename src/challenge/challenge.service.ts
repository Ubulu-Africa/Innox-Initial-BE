import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IChallenge } from 'src/database/interface';
import { ChallengeDTO } from './dto';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel('Challenge') private challengeModel: Model<IChallenge>,
  ) {}

  async getChallenges() {
    try {
      const challenges = await this.challengeModel.find();

      return {
        data: challenges,
      };
    } catch (error) {
      throw error;
    }
  }

  async getChallenge(challengeId: string) {
    try {
      const challenge = await this.challengeModel.findById(challengeId);

      return { success: true, data: challenge };
    } catch (error) {
      throw new NotFoundException('Challenge not found');
    }
  }

  async createChallenge(payload: ChallengeDTO) {
    try {
      const challenge = await this.challengeModel.create(payload);

      return {
        message: 'Challenge created successfully',
        challenge,
      };
    } catch (error) {
      throw error;
    }
  }

  // UTILS
}
