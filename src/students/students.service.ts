import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({ data: createStudentDto });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student)
      throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.student.delete({ where: { id } });
  }

  updatePhoto(id: number, photoUrl: string) {
    return this.prisma.student.update({ where: { id }, data: { photoUrl } });
  }
}
