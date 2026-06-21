import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsInt()
  userId!: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;
}
