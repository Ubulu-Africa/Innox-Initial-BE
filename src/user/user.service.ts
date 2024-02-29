import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IChallenge, IJoinChallenge, IUser } from 'src/database/interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>,
    @InjectModel('Challenge') private challengeModel: Model<IChallenge>,
    @InjectModel('JoinChallenge')
    private joinChallengeModel: Model<IJoinChallenge>,
  ) {}

  async getProfile(userId: string) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return { data: user };
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async getDashboard(user: IUser) {
    try {
      const challenges = await this.challengeModel
        .find()
        .sort({ createdAt: -1 });
      const joinedChallenges: any = await this.joinChallengeModel
        .find({
          userId: user._id,
        })
        .populate('challengeId')
        .sort({ createdAt: -1 })
        .exec();

      const challengeIdArray = joinedChallenges.map(
        (challenge) => challenge.challengeId,
      );

      return {
        data: [
          { firstName: user.firstName },
          { challenges },
          { joinedChallenges: challengeIdArray },
        ],
      };
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
