import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TanksModule } from './tanks/tanks.module';
import { DatabaseModule } from './database.module';
import { PlantsModule } from './plants/plants.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';

@Module({
  imports: [DatabaseModule, TerminusModule, TanksModule, PlantsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
