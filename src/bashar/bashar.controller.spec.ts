import { Test, TestingModule } from '@nestjs/testing';
import { BasharController } from './bashar.controller';
import { BasharService } from './bashar.service';

describe('BasharController', () => {
  let controller: BasharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasharController],
      providers: [BasharService],
    }).compile();

    controller = module.get<BasharController>(BasharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
