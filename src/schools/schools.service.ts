import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import School from './schools.entity';
import { Repository } from 'typeorm';
import CreateSchoolDto from './dto/createSchool.dto';
import { v4 as uuidv4 } from 'uuid';
import UpdateSchoolDto from './dto/updateSchool.dto';

@Injectable()
export class SchoolsService {
    constructor(
        @InjectRepository(School) private schoolRepository: Repository<School>
    ) {}

    // find all data schools
    gettAllSchools(): Promise<School[]> {
        return this.schoolRepository.find();
    }

    // find by id
    async getSchoolById(id: string): Promise<School> {
        const schools = await this.schoolRepository.findOne({where: {id}});
        if (schools){
            return schools;
        }
        throw new HttpException('School not found', HttpStatus.NOT_FOUND);
    }

    // create data schools
    async createSchool(schools: CreateSchoolDto): Promise<CreateSchoolDto>{
        const newSchool = await this.schoolRepository.create({
            ... schools,
            id: uuidv4(),
        });
        await this.schoolRepository.save(newSchool);

        return newSchool;
    }

    // update data school
    async updateSchool(id: string, post: UpdateSchoolDto): Promise<UpdateSchoolDto>{
        await this.schoolRepository.update(id, post);
        const updatedSchool = await this.schoolRepository.findOne({where: {id}});
        if(updatedSchool){
            return updatedSchool;
        }
        throw new HttpException('School not found', HttpStatus.NOT_FOUND);
    }

    // delete data school
    async deleteSchool(id: string): Promise<void>{
        const deletedScchool = await this.schoolRepository.delete(id);
        if(!deletedScchool.affected){
            throw new HttpException('School not found', HttpStatus.NOT_FOUND);
        }
    }
}
