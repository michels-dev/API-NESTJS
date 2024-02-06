import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import CreateStudentDto from './dto/createStudent.dto';
import UpdateStudentDto from './dto/updateStudent.dto';
import Student from './student.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    // get all students
    @Get()
    getStudents(): Promise<Student[]> {
        return this.studentsService.getAllStudents();
    }

    // get data student by id
    @Get(':id')
    getStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentsService.getStudentById(Number(id));
    }

    // create student
    @Post()
    async createStudent(@Body() student: CreateStudentDto): Promise<CreateStudentDto> {
        return this.studentsService.createStudent(student);
    }

    // update student
    @Put(':id')
    async updateStudent(@Param('id') id:number, @Body() student: UpdateStudentDto): Promise<any>{
        return this.studentsService.updateStudent(Number(id), student);
    }

    // delete student
    @Delete(':id')
    async deleteStudent(@Param('id') id: string): Promise<any>{
        this.studentsService.deleteStudent(Number(id));
    }
}
