import { Comments } from 'src/comments/entities/comments.entity';
import { Posts } from 'src/posts/entities/posts.entity';

export class Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  city: string;
  Comments: Comments[];
  Posts: Posts[];
}
