import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}

// id          Int        @id @default(autoincrement())
// firstName   String     @db.VarChar(255)
// lastName    String     @db.VarChar(255)
// email       String     @unique(map: "email") @db.VarChar(255)
// phoneNumber String     @default("0123456789") @db.VarChar(255)
// username    String     @default("") @db.VarChar(255)
// createdAt   DateTime   @db.DateTime(0)
// updatedAt   DateTime   @db.DateTime(0)
// city        String?    @default("") @db.VarChar(255)
// Comments    Comments[]
// Posts       Posts[]
