import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TanksModule } from './tanks/tanks.module';
import { DatabaseModule } from './database.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [DatabaseModule, TanksModule, PlantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
