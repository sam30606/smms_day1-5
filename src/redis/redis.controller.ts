import {
  Controller,
  Logger,
  Get,
  Post,
  Delete,
  Query,
  Param,
  Body,
} from '@nestjs/common';

import { RedisService } from './redis.service';
import {
  GetValueQuerys,
  SetValueBody,
  DeleteDataQuerys,
  OKGetValueQuerys,
  OKSetValueBody,
  OKDeleteDataQuerys,
} from './dto';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('redis')
export class RedisController {
  logger = new Logger('Redis');
  constructor(private readonly redisService: RedisService) {}

  @Get()
  @ApiTags('redis')
  @ApiOperation({ summary: 'GetValue' })
  @ApiOkResponse({ type: OKGetValueQuerys })
  async getValue(@Query() getValueQuerys: GetValueQuerys) {
    this.logger.log('getValue');
    return this.redisService.get(getValueQuerys.key);
  }
  @Post()
  @ApiTags('redis')
  @ApiOperation({ summary: 'SetValue' })
  @ApiOkResponse({ type: OKSetValueBody })
  async setValue(@Body() setValueBody: SetValueBody) {
    this.logger.log('setValue');
    return this.redisService.set(setValueBody);
  }
  @Delete()
  @ApiTags('redis')
  @ApiOperation({ summary: 'DeleteData' })
  @ApiOkResponse({ type: OKDeleteDataQuerys })
  async deleteData(@Query() deleteDataQuerys: DeleteDataQuerys) {
    this.logger.log('deleteData');
    return this.redisService.delete(deleteDataQuerys.key);
  }
}
