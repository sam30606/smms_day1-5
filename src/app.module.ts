import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { ConfigModule } from '@nestjs/config';
import { Redis } from './redis/redis.module';
@Module({
  imports: [HelloModule, Redis],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
