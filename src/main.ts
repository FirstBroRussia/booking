import { NestFactory } from '@nestjs/core';

import { Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';


const APP_HOST = 'localhost';
const APP_PORT = 3000;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(APP_PORT, APP_HOST, () => {
    Logger.log(`Приложение запущено на http://${APP_HOST}:${APP_PORT}`);
  });
}
bootstrap();
