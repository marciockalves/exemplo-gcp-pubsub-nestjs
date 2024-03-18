import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubusbuProvider } from './pubusb.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PubusbuProvider],
})
export class AppModule {}
