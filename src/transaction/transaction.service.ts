import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from './transaction.entity';
import { Repository, getConnection } from 'typeorm';
import { CardService } from 'src/card/card.service';
import { CreateTransactionDto } from './create.transaction.dto';

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction> {
  public constructor(
    @InjectRepository(Transaction)
    public transactionRepository: Repository<Transaction>,
    private cardService: CardService,
  ) {
    super(transactionRepository);
  }

  public async create(body: CreateTransactionDto): Promise<void> {
    await getConnection().transaction(async () => {
      await this.cardService.decrease(body.sender, body.amount);
      await this.cardService.increase(body.receiver, body.amount);

      const transaction = this.transactionRepository.create(body);
      await this.transactionRepository.save(transaction);
    });
  }
}
