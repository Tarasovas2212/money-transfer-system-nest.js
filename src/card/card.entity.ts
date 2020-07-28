import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Min, IsInt, IsOptional, IsEmpty } from 'class-validator';
import { User } from '../user/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'cards' })
export class Card {
  @ApiProperty({required: false})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ default: 0 })
  @Min(0)
  @IsOptional()
  debit: number;

  @ApiProperty({ required: false })
  @Column({ default: 0 })
  @IsEmpty()
  credit: number;

  @ApiProperty({ required: false })
  @Column({ name: 'credit_limit', default: 0 })
  @Min(0)
  @IsOptional()
  creditLimit: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  @IsInt()
  user: User;
}
