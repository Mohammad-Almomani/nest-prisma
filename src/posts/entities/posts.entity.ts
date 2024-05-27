import { Comments } from '../../comments/entities/comments.entity';
import { Users } from '../../users/entities/users.entity';

export class Posts {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  category: string | null;
  Comments?: Comments[];
  Users?: Users;
}
