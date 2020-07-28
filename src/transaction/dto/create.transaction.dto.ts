import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionDto {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  sender: number;
  @ApiProperty()
  receiver: number;
}