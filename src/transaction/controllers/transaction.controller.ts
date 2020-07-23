import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Transaction } from '../entities/transaction.entity';
import { TransactionService } from '../services/transaction.service';

@Crud({
  model: {
    type: Transaction,
  },
  routes: {
    only: ['createOneBase', 'getManyBase', 'getOneBase'],
  },
})
@Controller('/api/transactions')
export class TransactionController implements CrudController<Transaction> {
  public constructor(public service: TransactionService) {}
}
