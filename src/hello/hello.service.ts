import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello World!';
  }
  addNum(num): Number {
    num = num + 1
    return num;
  }
}
