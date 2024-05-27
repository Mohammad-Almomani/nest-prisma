import { Test, TestingModule } from '@nestjs/testing';
import { BasharService } from './bashar.service';

describe('BasharService', () => {
  let service: BasharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasharService],
    }).compile();

    service = module.get<BasharService>(BasharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
