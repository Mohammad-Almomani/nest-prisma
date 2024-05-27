import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUsersDto) {
    try {
      const now = new Date();
      return await this.prisma.users.create({
        data: {
          ...createUserDto,
          createdAt: createUserDto.createdAt || now,
          updatedAt: createUserDto.updatedAt || now,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async findAll() {
    try {
      return await this.prisma.users.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch users');
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.users.findUnique({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch user');
    }
  }

  async update(id: number, updateUserDto: UpdateUsersDto) {
    try {
      return await this.prisma.users.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.users.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete user');
    }
  }
}
