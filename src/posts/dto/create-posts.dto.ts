export class CreatePostsDto {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category?: string;
}