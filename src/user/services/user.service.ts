import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import _ from 'lodash';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(query: any): Promise<User[]> {
    const { take, order, sort, page, size } = query;
    let sortOrder = { [sort]: order };
    if (sort === undefined || order === undefined) {
      sortOrder = {};
    }
    const skip = (page - 1) * size;
    return this.userRepository.find({
      take: take,
      order: sortOrder,
      skip: skip,
    });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
