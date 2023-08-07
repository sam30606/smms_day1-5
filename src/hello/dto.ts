import { ApiProperty } from '@nestjs/swagger';
export class FromBody {
  @ApiProperty({ description: 'number', example: 1, required: false })
  num: number;
}
export class FromHeaders {
  @ApiProperty({ description: 'Access token', required: false })
  token: string;
}
export class FromParams {
  @ApiProperty({ description: 'number', example: 1 })
  num: number;
}
export class FromQuerys {
  @ApiProperty({ description: 'number', example: 1 })
  num: number;
}
export class OkResponse {
  @ApiProperty({ example: 2 })
  num: number;
}
