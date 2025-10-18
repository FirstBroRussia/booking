#!/usr/bin/env ts-node

import 'reflect-metadata';

import { DataSource } from "typeorm";

import { Logger } from '@nestjs/common';

import { UserEntity } from "../app/entity/user.entity";
import { EventEntity } from "../app/entity/event.entity";
import { BookingEntity } from '../app/entity/booking.entity';



async function main() {
  const logger = new Logger('SEED_TEST_DATA');

  const USERS_COUNT = 5;
  const TOTAL_SEATS = 200;

  const mockEventsArr = [
    'Концерт поп-музыки',
    'Ледовое шоу',
    'Реп-концерт',
    'Пьеса',
  ];


  const argv = process.argv.slice(2);

  const databaseUrl = argv[0];

  const AppDataSourceInstance = new DataSource({
    type: 'postgres',
    url: databaseUrl,
    synchronize: true,
    entities: [
      UserEntity,
      EventEntity,
      BookingEntity,
    ],
  });

  await AppDataSourceInstance.initialize();

  if (AppDataSourceInstance.isInitialized) {
    logger.log('Подключение к БД прошло успешно!');
  }

  const userRepository = AppDataSourceInstance.getRepository(UserEntity);
  const eventRepository = AppDataSourceInstance.getRepository(EventEntity);

  // await AppDataSourceInstance.manager.query(
  //   `TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`
  // );

  logger.log('Сгенерируем тестовые данные пользователей и добавим их в БД...');
  const testUsersData = Array.from({ length: USERS_COUNT }, (_item, index) => ({ username: `user${index + 1}` } as UserEntity));
  await userRepository.upsert(testUsersData, ['username']);
  const newUsers = await userRepository.find();
  logger.log(newUsers);
  logger.log('Тестовые данные пользователей добавлены в БД!');
  
  logger.log('----------------------------------');

  logger.log('Сгенерируем тестовые данные мероприятий(событий) и добавим их в БД...');

  const testEventData = mockEventsArr.map((item) => ({
    name: item,
    totalSeats: TOTAL_SEATS,
  } as EventEntity));
  await eventRepository.upsert(testEventData, ['name']);
  const newEvents = await eventRepository.find();
  logger.log(newEvents);
  logger.log('Тестовые данные мероприятий(событий) добавлены в БД!');


  process.exit(0);
}

main().catch((err) => {
  console.error(err);
});
