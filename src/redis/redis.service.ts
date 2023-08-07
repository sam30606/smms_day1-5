import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async set(pair: object) {
    pair['status'] = await this.redis.set(pair['key'], pair['value'], 'EX', 10);
    return pair;
  }
  async get(key: string) {
    const response: any = await this.redis.get(key);
    const result: object = {};
    result['key'] = key;
    result['value'] = response;
    return result;
  }
  async delete(key: string) {
    const response: any = await this.redis.del(key);
    const result: object = {};
    result['key'] = key;
    if (response === 0) result['status'] = 'was deleted';
    else result['status'] = 'deleted';
    return result;
  }
}
