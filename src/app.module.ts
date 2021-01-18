import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { FrogsController } from './frogs/frogs.controler';
import { FrogsService } from './frogs/frogs.service';
import { owlController } from './owls/owls.controller';
import { OwlService } from './owls/owls.service';
import { RacoonController } from './Racoon/racoons.controller';
import { RacoonsService } from './Racoon/racoons.service';
import { SpidersController } from './spider/spider.controller';
import { SpidersService } from './spider/spider.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController, FrogsController, owlController, RacoonController, SpidersController],
  providers: [AppService, CatsService, DogsService, FrogsService, OwlService, RacoonsService, SpidersService], 

})
export class AppModule {}
