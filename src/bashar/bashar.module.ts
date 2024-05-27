import { Module } from '@nestjs/common';
import { BasharService } from './bashar.service';
import { BasharController } from './bashar.controller';

@Module({
  controllers: [BasharController],
  providers: [BasharService],
})
export class BasharModule {}
