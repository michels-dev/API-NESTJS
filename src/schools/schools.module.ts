import { Module } from '@nestjs/common';
import { SchoolsController } from './schools.controller';
import { SchoolsService } from './schools.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import School from './schools.entity';

@Module({
  imports:[TypeOrmModule.forFeature([School])],
  controllers: [SchoolsController],
  providers: [SchoolsService]
})
export class SchoolsModule {}
