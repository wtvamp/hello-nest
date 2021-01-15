import { Injectable } from '@nestjs/common';
import { Spider } from './interfaces/spider.interface';

@Injectable()
export class SpidersService {
    private readonly spiders: Spider[] = [];

    create(spider: Spider) {
        this.spiders.push(spider);
    }

    findAll(): Spider[] {
        return this.spiders;
    }

    find(id: number): Spider {
        return this.spiders.find(a => a.id === id);
    }
}