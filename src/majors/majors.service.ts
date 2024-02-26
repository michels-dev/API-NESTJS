import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Major from './majors.entity';
import CreateMajorDto from './dto/createMajor.dto';
import { v4 as uuidv4 } from 'uuid';
import UpdateMajorDto from './dto/updateMajor.dto';

@Injectable()
export class MajorsService {
    constructor(
        @InjectRepository(Major) private majorRepository: Repository<Major>
    ){}

    // find all data majors
    getAllMajors(): Promise<Major[]> {
        return this.majorRepository.find();
    }

    // find by id
    async getMajorById(id: string): Promise<Major> {
        const majors = await this.majorRepository.findOne({where:{id}});
        if (majors){
            return majors;
        }
        throw new HttpException('Major not found', HttpStatus.NOT_FOUND);
    }

    // create data majors
    async createMajor(majors: CreateMajorDto): Promise<CreateMajorDto> {
        const newMajor = await this.majorRepository.create({
            ... majors,
            id: uuidv4(),
        })
        await this.majorRepository.save(newMajor);

        return newMajor;
    }

    // update data major
    async updateMajor(id: string, post: UpdateMajorDto): Promise<UpdateMajorDto>{
        await this.majorRepository.update(id, post);
        const updatedMajor = await this.majorRepository.findOne({where:{id}});
        if(updatedMajor){
            return updatedMajor;
        }
        throw new HttpException('Major not foundd', HttpStatus.NOT_FOUND)
    }

    // delete data major
    async deleteMajor(id: string): Promise<void>{
        const deletedMajor = await this.majorRepository.delete(id);
        if(!deletedMajor) {
            throw new HttpException('Major not foundd', HttpStatus.NOT_FOUND);
        }
    }
}
