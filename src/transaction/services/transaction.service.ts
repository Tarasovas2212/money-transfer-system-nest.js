import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from '../entities/transaction.entity';
import { Repository } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction> {
  public constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {
    super(transactionRepository);
  }

  public async create(
    req: CrudRequest,
    body: Transaction,
  ): Promise<Transaction> {
    console.log('Override transaction');
    return super.createOne(req, body);
  }
}
