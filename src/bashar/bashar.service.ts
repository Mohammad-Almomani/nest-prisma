import { Injectable } from '@nestjs/common';
import { CreateBasharDto } from './dto/create-bashar.dto';
import { UpdateBasharDto } from './dto/update-bashar.dto';

@Injectable()
export class BasharService {
  create(createBasharDto: CreateBasharDto) {
    return 'This action adds a new bashar';
  }

  findAll() {
    return `This action returns all bashar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bashar`;
  }

  update(id: number, updateBasharDto: UpdateBasharDto) {
    return `This action updates a #${id} bashar`;
  }

  remove(id: number) {
    return `This action removes a #${id} bashar`;
  }
}
