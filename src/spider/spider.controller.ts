import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateSpiderDto, UpdateSpiderDto } from './dto/create-spider.dto';
import { SpidersService } from './spider.service';
import { Spider } from './interfaces/spider.interface';

@Controller('spiders')
export class SpidersController {

    constructor(private spidersService: SpidersService) {}

    @Post()
    create(@Body() createSpiderDto: CreateSpiderDto) {
        this.spidersService.create(createSpiderDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        this.spidersService.find(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSpiderDto: UpdateSpiderDto) {
        return `This action updates a #${id} spider`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} spider`;
    }

    @Get()
    async findAll(): Promise<Spider[]> {
      return this.spidersService.findAll();
    }
}