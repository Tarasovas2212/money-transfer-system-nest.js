import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
}
export class UpdateUserDto {
  @ApiProperty()
  name: string;
}
