import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import School from './school.entity';
import CreateSchoolDto from './dto/createSchool.dto';
import UpdateSchoolDto from './dto/updateSchool.dto';

@Controller('schools')
export class SchoolsController {
    constructor(private readonly schoolsService: SchoolsService){}

    // get all data schools
    @Get()
    getSchools(): Promise<School[]>{
        return this.schoolsService.gettAllSchools();
    }

    // get school by id
    @Get(':id')
    getSchoolById(@Param('id') id: string): Promise<School>{
        return this.schoolsService.getSchoolById(String(id));
    }

    //  create data school
    @Post()
    async createSchool(@Body() school: CreateSchoolDto): Promise<CreateSchoolDto>{
        return this.schoolsService.createSchool(school);
    }

    // update data school
    @Put(':id')
    async updateSchool(@Param('id') id: string, @Body() school: UpdateSchoolDto): Promise<any>{
        return this.schoolsService.updateSchool(String(id), school);
    }

    // delete data school
    @Delete(':id')
    async deleteSchool(@Param('id') id: string): Promise<any>{
        this.schoolsService.deleteSchool((id));
    }
}
