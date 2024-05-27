import { Prisma } from '@prisma/client';

export class UpdateCommentsDto {
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  meta_tags?: Prisma.InputJsonValue;
}
