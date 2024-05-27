import { Posts } from 'src/posts/entities/posts.entity';
import { Users } from 'src/users/entities/users.entity';

export class Comments {
  id: number;
  content: string;
  postId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  meta_tags: any;
  Posts: Posts;
  Users: Users;
}
