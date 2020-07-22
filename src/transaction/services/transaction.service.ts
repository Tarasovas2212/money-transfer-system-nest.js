import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from '../entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction> {
  public constructor(
    @InjectRepository(Transaction)
    transactionRepository: Repository<Transaction>,
  ) {
    super(transactionRepository);
  }
}
