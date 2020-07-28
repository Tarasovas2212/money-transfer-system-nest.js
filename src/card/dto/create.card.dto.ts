import { ApiProperty } from "@nestjs/swagger";

export class CreateCardDto {
  @ApiProperty({ required: false })
  creditLimit: number;
  @ApiProperty()
  user: number;
}