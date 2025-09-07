import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurations
  app.useBodyParser('json', { limit: '300kb' });

  app.get(AppService).initTestData();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
