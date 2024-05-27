import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new HttpException('Forbidden', 403);
    return 'Hello World!';
  }
}
