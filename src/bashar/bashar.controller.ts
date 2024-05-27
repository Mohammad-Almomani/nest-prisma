import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasharService } from './bashar.service';
import { CreateBasharDto } from './dto/create-bashar.dto';
import { UpdateBasharDto } from './dto/update-bashar.dto';

@Controller('bashar')
export class BasharController {
  constructor(private readonly basharService: BasharService) {}

  @Post()
  create(@Body() createBasharDto: CreateBasharDto) {
    return this.basharService.create(createBasharDto);
  }

  @Get()
  findAll() {
    return this.basharService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basharService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasharDto: UpdateBasharDto) {
    return this.basharService.update(+id, updateBasharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basharService.remove(+id);
  }
}
