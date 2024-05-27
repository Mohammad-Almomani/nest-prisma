import { Prisma } from '@prisma/client';

export class CreateCommentsDto {
  content: string;
  createdAt: Date;
  updatedAt: Date;
  meta_tags?: Prisma.InputJsonValue;
}
