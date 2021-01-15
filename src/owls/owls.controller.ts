import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateOwlDto, UpdateOwlDto } from './dtos/create-Owl.dto';
import { OwlService } from './owls.service';
import { Owl } from './interfaces/owl.interface';

@Controller('owl')
export class owlController {

    constructor(private owlService: OwlService) {}

    @Post()
    create(@Body() createOwlDto: CreateOwlDto) {
        this.owlService.create(createOwlDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        this.owlService.find(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOwlDto: UpdateOwlDto) {
        return `This action updates a #${id} owl`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} owl`;
    }

    @Get()
    async findAll(): Promise<Owl[]> {
      return this.owlService.findAll();
    }
}