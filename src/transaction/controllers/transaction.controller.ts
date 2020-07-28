import { Controller, Post, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Transaction } from '../entities/transaction.entity';
import { TransactionService } from '../services/transaction.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTransactionDto } from '../dto/create.transaction.dto';

@Crud({
  model: {
    type: Transaction,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
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
@ApiTags('transactions')
@Controller('/api/transactions')
export class TransactionController implements CrudController<Transaction> {
  public constructor(public service: TransactionService) {}

  @Post()
  create(@Body() body: CreateTransactionDto): Promise<void> {
    return this.service.create(body);
  }
}
