import { Controller, Post, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Transaction } from '../entities/transaction.entity';
import { TransactionService } from '../services/transaction.service';
// import { CreateTransactionDto } from '../interfaces/transaction.interface';

@Crud({
  model: {
    type: Transaction,
  },
  routes: {
    only: ['createOneBase', 'getManyBase', 'getOneBase'],
  },
  query: {
    join: {
      sender: {
        eager: true,
      },
      receiver: {
        eager: true,
      },
    },
  },
})
@Controller('/api/transactions')
export class TransactionController implements CrudController<Transaction> {
  public constructor(public service: TransactionService) {}

  // @Post()
  // create(@Body() body: CreateTransactionDto): Promise<void> {
  //   return this.transactionService.create(body);
  // }
}
