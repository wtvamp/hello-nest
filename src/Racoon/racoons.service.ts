import { Injectable } from '@nestjs/common';
import { Racoon } from './interfaces/racoon.interface';

@Injectable()
export class RacoonsService {
    private readonly racoons: Racoon[] = [];

    create(racoon: Racoon) {
        this.racoons.push(racoon);
    }

    findAll(): Racoon[] {
        return this.racoons;
    }

    find(id: number): Racoon {
        return this.racoons.find(a => a.id === id);
    }
}