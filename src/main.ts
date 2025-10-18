import { NestFactory } from '@nestjs/core';

import { Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';


const APP_HOST = '127.0.0.1';
const APP_PORT = 10001;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(APP_PORT, APP_HOST, () => {
    Logger.log(`Приложение запущено на http://${APP_HOST}:${APP_PORT}`);
  });
}
bootstrap();
