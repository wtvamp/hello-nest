import { Controller, Get, Query, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateDogDto, UpdateDogDto } from './dtos/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService) {}

    @Post()
    create(@Body() createDogDto: CreateDogDto) {
        this.dogsService.create(createDogDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.dogsService.find(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
        return `This action updates a #${id} dog`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} dog`;
    }

    @Get()
    async findAll(): Promise<Dog[]> {
      return this.dogsService.findAll();
    }
}