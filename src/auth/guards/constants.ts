import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

console.log(config.get<string>('JWT_SECRET'));

export const jwtConstants = {
  secret: config.get('JWT_SECRET'),
};
