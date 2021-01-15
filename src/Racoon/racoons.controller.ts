import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateRacoonDto, UpdateRacoonDto } from './dtos/create-racoon.dto';
import { RacoonsService } from './racoons.service';
import { Racoon } from './interfaces/racoon.interface';

@Controller('racoon')
export class RacoonController {

    constructor(private racoonsService: RacoonsService) {}

    @Post()
    create(@Body() createRacoonDto: CreateRacoonDto) {
        this.racoonsService.create(createRacoonDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        this.racoonsService.find(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRacoonDto: UpdateRacoonDto) {
        return `This action updates a #${id} racoon`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} racoon`;
    }

    @Get()
    async findAll(): Promise<Racoon[]> {
      return this.racoonsService.findAll();
    }
}