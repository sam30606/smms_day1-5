import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import {
  FromBody,
  FromHeaders,
  FromParams,
  FromQuerys,
  OkResponse,
} from './dto';

@Controller('helloworld')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @Get() sayHello(): string {
    return this.helloService.getHello();
  }
  @Post('addnum')
  @ApiTags('addnum')
  @ApiOkResponse({ type: OkResponse })
  addQuery(
    @Query() fromQuerys: FromQuerys,
    @Headers() fromHeaders: FromHeaders,
    @Body() fromBody: FromBody,
  ) {
    const bodyAdded = this.helloService.addNum(Number(fromQuerys.num));
    return bodyAdded;
  }
  @Post('addnum/:num')
  @ApiTags('addnum')
  @ApiOkResponse({ type: OkResponse })
  addParam(
    @Param() fromParams: FromParams,
    @Headers() fromHeaders: FromHeaders,
  ) {
    const paramAdded = this.helloService.addNum(Number(fromParams.num));
    return paramAdded;
  }
}
