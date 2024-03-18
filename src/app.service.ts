import { Injectable } from '@nestjs/common';
import { IRequestDto } from './IRequest.dto';
import { PubusbuProvider } from './pubusb.provider';

@Injectable()
export class AppService {

  constructor(private readonly pubsub: PubusbuProvider){}
  async sendMessage(request: IRequestDto): Promise<string> {

    this.pubsub.publisher('mytopic', JSON.stringify(request));

    return 'mensage';
  }
}
