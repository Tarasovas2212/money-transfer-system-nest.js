import { Card } from 'src/card/entities/card.entity';

export class CreateTransactionDto {
  amount: number;
  sender: string;
  receiver: string;
}
