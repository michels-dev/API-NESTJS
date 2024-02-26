import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Major from './majors.entity';
import { MajorsService } from './majors.service';
import CreateMajorDto from './dto/createMajor.dto';
import UpdateMajorDto from './dto/updateMajor.dto';

@Controller('majors')
export class MajorsController {
    constructor(private readonly majorsService: MajorsService){}

    // get all majors
    @Get()
    getMajors(): Promise<Major[]>{
        return this.majorsService.getAllMajors();
    }

    // get major by id
    @Get(':id')
    getMajorById(@Param('id') id: string): Promise<Major>{
        return this.majorsService.getMajorById(String(id));
    }

    // create majors
    @Post()
    async createMajor(@Body() majors: CreateMajorDto): Promise<CreateMajorDto>{
        return this.majorsService.createMajor(majors);
    }

    // update majors
    @Put(':id')
    async updateMajor(@Param('id') id: string, @Body() majors: UpdateMajorDto): Promise<any>{
        return this.majorsService.updateMajor(String(id), majors);
    }

    // delete majors
    @Delete(':id')
    async deleteMajor(@Param('id') id: string): Promise<any>{
        this.majorsService.deleteMajor(id);
    }
}
