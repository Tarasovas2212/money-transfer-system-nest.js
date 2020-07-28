import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
}
export class UpdateUserDto {
  @ApiProperty()
  name: string;
}

export class QueryUserDTO {
  @ApiProperty({ required: false })
  take?: number;
  @ApiProperty({ required: false })
  order?: string;
  @ApiProperty({ required: false })
  sort?: string;
  @ApiProperty({ required: false })
  page?: number;
  @ApiProperty({ required: false })
  size?: number;
  @ApiProperty({ required: false })
  name?: string;
}
