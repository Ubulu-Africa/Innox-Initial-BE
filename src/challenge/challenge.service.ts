import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IChallenge, IJoinChallenge } from 'src/database/interface';
import { ChallengeDTO, JoinChallengeDTO } from './dto';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel('Challenge') private challengeModel: Model<IChallenge>,
    @InjectModel('JoinChallenge')
    private joinChallengeModel: Model<IJoinChallenge>,
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

  async joinChallenge(payload: JoinChallengeDTO, userId: string) {
    try {
      const checkIfJoined = await this.joinChallengeModel.findOne({
        userId,
        challengeId: payload.challengeId,
      });

      if (checkIfJoined) {
        throw new ForbiddenException('You are already in this challenge');
      }

      const joinChallenge = await this.joinChallengeModel.create({
        ...payload,
        userId,
      });

      return {
        message: 'Challenge created successfully',
        joinChallenge,
      };
    } catch (error) {
      throw error;
    }
  }

  async getChallengeAuth(challengeId: string, userId: string) {
    try {
      const challenge: any = await this.challengeModel.findById(challengeId);

      const getIsRegistered = await this.joinChallengeModel.findOne({
        userId,
        challengeId,
      });

      let isRegistered = false;

      if (getIsRegistered) {
        isRegistered = true;
      }

      const data = { ...challenge._doc, isRegistered };

      return { success: true, data };
    } catch (error) {
      throw new NotFoundException('Challenge not found');
    }
  }

  // UTILS
}
