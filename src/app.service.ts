import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Everybody!';
  }

  myMethod(): string {}

  myTeammateMethod(): string {}

  myMethod2(): string {}
  // ok, we're done...
}
