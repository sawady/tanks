import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TanksModule } from './tanks/tanks.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule, TanksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
