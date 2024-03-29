import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database.module';
import { StudentsModule } from './students/students.module';
import { SchoolsModule } from './schools/schools.module';
import { MajorsModule } from './majors/majors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath:'.env',
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),

    }),
  }),
  DatabaseModule,
  StudentsModule,
  SchoolsModule,
  MajorsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
