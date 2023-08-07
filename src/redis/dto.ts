import { ApiProperty } from '@nestjs/swagger';
export class GetValueQuerys {
  @ApiProperty({ description: 'string', example: 'test' })
  key: string;
}
export class SetValueBody {
  @ApiProperty({
    description: 'string',
    example: 'test',
    required: true,
  })
  key: string;
  @ApiProperty({
    description: 'string',
    example: 'testtt',
    required: true,
  })
  value: any;
}
export class SetValueQuerys {
  @ApiProperty({
    description: 'string',
    example: 'testttt',
    required: true,
  })
  key: string;
  value: any;
}
export class DeleteDataQuerys {
  @ApiProperty({ description: 'string', example: 'test' })
  key: string;
}
export class OKGetValueQuerys {
  @ApiProperty({ example: 'test' })
  key: string;
  @ApiProperty({ example: 'testttt' })
  value: any;
}
export class OKSetValueBody {
  @ApiProperty({ example: 'test' })
  key: string;
  @ApiProperty({ example: 'testttt' })
  value: any;
  @ApiProperty({ example: 'OK' })
  status: string;
}
export class OKDeleteDataQuerys {
  @ApiProperty({ example: 'test' })
  key: string;
  @ApiProperty({ example: 'testttt' })
  value: any;
  @ApiProperty({ example: 1 })
  status: number;
}
