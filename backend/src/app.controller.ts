import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('init')
  initTestData(): string {
    this.appService.initTestData();
    return 'Test data initialized!';
  }
}
