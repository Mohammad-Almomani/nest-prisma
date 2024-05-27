import { Comments } from 'src/comments/entities/comments.entity';
import { Users } from 'src/users/entities/users.entity';

export class Posts {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  Comments: Comments[];
  Users: Users;
}
