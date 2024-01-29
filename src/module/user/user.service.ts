import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from 'src/module/user/entities/user.entity';
import HandlerException from 'src/function/HandlerException';
import { Role } from 'src/module/common/enum/roles.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      if (createUserDto.password !== createUserDto.passwordConfirm) {
        throw new Error(`The password are don\'t match`);
      }

      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(createUserDto.password, salt);

      const newUser = await this.userModel.create({
        name: {
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        email: createUserDto.email,
        password: hash,
        salt,
        isActive: false,
        acceptTerm: true,
        roles: [Role.User],
      });

      return newUser;
    } catch (e) {
      HandlerException(e, User.name);
    }
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({
        email,
      });
      if (!user) {
        throw new Error(`User not found`);
      }
      return user;
    } catch (e) {
      HandlerException(e);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id);
      return user;
    } catch (e) {
      HandlerException(e);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
