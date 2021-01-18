import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateFrogDto, UpdateFrogDto } from './dtos/create-frog.dto';
import { FrogsService } from './frogs.service';
import { Frog } from './interfaces/frog.interface';

@Controller('frogs')
export class FrogsController {
    frogsService: any;

    constructor(private casService: FrogsService) {}

    @Post()
    create(@Body() CreateFrogDto: CreateFrogDto) {
        this.frogsService.create(CreateFrogDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        this.frogsService.find(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() UpdateFrogDto: UpdateFrogDto) {
        return `This action updates a #${id} frog`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} frog`;
    }

    @Get()
    async findAll(): Promise<Frog[]> {
      return this.frogsService.findAll();
    }
}