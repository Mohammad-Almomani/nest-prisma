import { Comments } from '../../comments/entities/comments.entity';
import { Posts } from '../../posts/entities/posts.entity';

export class Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  city: string | null;
  newColumn: string | null;
  Comments?: Comments[];
  Posts?: Posts[];
}
