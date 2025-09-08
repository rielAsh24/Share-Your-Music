import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurations
  app.useBodyParser('json', { limit: '300kb' });
  app.useGlobalPipes(new ValidationPipe());

  app.get(AppService).initTestData();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
