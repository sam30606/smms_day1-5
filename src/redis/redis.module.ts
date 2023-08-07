import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        username: 'sam',
        password: '0000',
      },
    }),
  ],
  controllers: [RedisController],
  providers: [RedisService],
})
export class Redis {}
