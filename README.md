# 作業 - 5. 架設 Redis server

## Issues

#### ERROR [RedisModule] default: write EPIPE

```
protected-mode 　 no
```

關掉才會讓 localhost 以外的 ip 連線到，要記得設定 users.acl 或是 requirepass

#### default: connect ECONNREFUSED 172.27.0.2:6379

redis.conf 要 bind 0.0.0.0

```
url: service:port
url: redis:6379
```

#### default: connect ECONNREFUSED 127.0.0.1:6379

docker 每個 container 都是獨立的

docker inspect 會看到 container 的 ip

```
"Gateway": "172.19.0.1",
"IPAddress": "172.19.0.2"
```

## redis.conf

```
protected-mode 　 no
aclfile /usr/local/etc/redis/users.acl
requirepass 0000
```

## users.acl

```
user sam allcommands allkeys on >0000
```

## redis.module

```
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

```

## redis.service.ts

```
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
```
