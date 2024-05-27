import { PartialType } from '@nestjs/mapped-types';
import { CreateBasharDto } from './create-bashar.dto';

export class UpdateBasharDto extends PartialType(CreateBasharDto) {}
