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
  mig_test: string | null;
  newColumn50: string | null;
  newColumn800: string | null;
  newColumn900: string | null;
  newColumn654: string | null;
  oldColumn1: string | null;
  oldColumn2: string | null;
  Comments?: Comments[];
  Users?: Users;
}
