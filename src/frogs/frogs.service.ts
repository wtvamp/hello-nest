import { Injectable } from '@nestjs/common';
import { Frog } from './interfaces/frog.interface';

@Injectable()
export class FrogsService {
    private readonly frogs: Frog[] = [];

    create(frog: Frog) {
        this.frogs.push(frog);
    }

    findAll(): Frog[] {
        return this.frogs;
    }

    find(id: number): Frog {
        return this.frogs.find(a => a.id === id);
    }
}