import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Student from './student.entity';
import { Repository } from 'typeorm';
import CreateStudentDto from './dto/createStudent.dto';
import UpdateStudentDto from './dto/updateStudent.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) {}

//find all data students
getAllStudents(){
    return this.studentRepository.find();
}

// find data by id student
async getStudentById(id: number) {
    const student = await this.studentRepository.findOne({where: {id}});
    if (student) {
        return student;
    }
    throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
}

// create data student
async createStudent(student: CreateStudentDto){
    const newStudent = await this.studentRepository.create(student);
    await this.studentRepository.save(newStudent);

    return newStudent;
}

// update data student
async updateStudent(id: number, post: UpdateStudentDto){
    await this.studentRepository.update(id, post);
    const updatedStudent = await this.studentRepository.findOne({where: {id}});
    if(updatedStudent){
        return updatedStudent;
    }
    throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
}

// delete data  student
async deleteStudent(id: number){
    const deletedStudent = await this.studentRepository.delete(id);
    if(!deletedStudent.affected){
        throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
}
}
