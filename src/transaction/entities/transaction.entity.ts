import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Card } from 'src/card/entities/card.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'transactions' })
export class Transaction {
  @ApiProperty({required: false})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ default: 0 })
  amount: number;

  @ApiProperty({required: false})
  @Column({ type: 'timestamp without time zone', default: 'NOW()' })
  date: Date;

  @ApiProperty({required: false})
  @Column({ name: 'is_aborted', default: false })
  isAborted: boolean;

  @ApiProperty({type: Number, minimum: 1})
  @ManyToOne(() => Card, { nullable: false })
  @JoinColumn({ name: 'sender_card_id' })
  sender: number;

  @ApiProperty({type: Number, minimum: 1})
  @ManyToOne(() => Card, { nullable: false })
  @JoinColumn({ name: 'receiver_card_id' })
  receiver: number;
}
