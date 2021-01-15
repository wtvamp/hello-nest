import { Injectable } from '@nestjs/common';
import { Owl } from './interfaces/owl.interface';

@Injectable()
export class OwlService {
    private readonly owl: Owl[] = [];

    create(owl: Owl) {
        this.owl.push(owl);
    }

    findAll(): Owl[] {
        return this.owl;
    }

    find(id: number): Owl {
        return this.owl.find(a => a.id === id);
    }
}