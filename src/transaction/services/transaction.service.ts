import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from '../entities/transaction.entity';
import { Repository, getConnection } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { CardService } from 'src/card/services/card.service';
// import { CreateTransactionDto } from '../interfaces/transaction.interface';

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction> {
  public constructor(
    @InjectRepository(Transaction)
    public transactionRepository: Repository<Transaction>,
    private cardService: CardService,
  ) {
    super(transactionRepository);
  }

  public async create(body: Transaction): Promise<void> {
    await getConnection().transaction(async () => {
      await this.cardService.decrease(body.sender.toString(), body.amount);
      await this.cardService.increase(body.receiver.toString(), body.amount);

      const transaction = this.transactionRepository.create(body);
      await this.transactionRepository.save(transaction);
    });
  }

  // public async create(body: CreateTransactionDto): Promise<void> {
  //   //const transaction = this.transactionRepository.create(body);
  //   //console.log(transaction);
  //   await getConnection().transaction(async () => {
  //     await this.cardService.decrease(body.sender.toString(), body.amount);
  //     await this.cardService.increase(body.receiver.toString(), body.amount);

  //     const transaction = new Transaction();
  //     transaction.sender = body.sender;
  //     transaction.receiver = body.sender;
  //     transaction.amount = body.amount;
  //     await this.transactionRepository.save(body);
  //   });
  //   //return transaction;
  //   //return super.createOne(req, body);
  // }
}
