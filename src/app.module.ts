import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [PrismaModule, UsersModule, BooksModule, StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
