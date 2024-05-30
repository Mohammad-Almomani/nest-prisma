import { Prisma } from '@prisma/client';
import { Posts } from '../../posts/entities/posts.entity';
import { Users } from '../../users/entities/users.entity';

export class Comments {
  id: number;
  content: string;
  postId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  meta_tags: Prisma.JsonValue | null;
  newColumn2: string | null;
  Posts?: Posts;
  Users?: Users;
}
