import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PubusbuProvider } from './pubusb.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const subscriber = app.get(PubusbuProvider);

  subscriber.subscribe('mysub').subscribe(message=>{
    console.log('Mensagem recebida', message);
  })

  await app.listen(4000);

}
bootstrap();
