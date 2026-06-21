import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  studentId!: number;

  @IsInt()
  bookId!: number;
}
