import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequestDto } from './IRequest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('pub')
  async sendMessage(@Body() request: IRequestDto): Promise<string> {

    const result = await this.appService.sendMessage(request);
    return result;
  }
}
