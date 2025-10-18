<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# 1. Установка зависимостей

Первым делом выполните установку всех необходимых пакетов:

```bash
npm install
```

# 2. Создание БД и внесение в нее тестовых данных
В файле `docker-compose.yaml` предусмотрена директива для поднятия тестовой базы данных PostgreSQL.

После того как база данных будет поднята, вы можете поместить в нее тестовые данные.

Что-бы их сгенерировать, нужно будет из корня проекта запустить команду:

```bash
$ npx ts-node ./src/cli/seed.ts postgres://postgres:postgres@localhost:5432/postgres
```

Тут в качестве аргумента передается строка подключения к БД, формат строки подключения:

`postgres://postgres:postgres@localhost:5432/postgres` (замените на ваши учётные данные).

После этой операции в БД появятся тестовые данные, как они выглядят вы увидите в выводе в консоле.


# 3. Запуск приложения

После создания БД и генерации в ней тестовых данных вы можете запустить приложение, нужно создать `env` файл. Его пример находится в `./env/example.env`

## Запуск в режиме `development`:

```bash
$ ENV_PATH=путь_до_созданного_вами_env_файла npm run start:dev
```

# 4. Запуск с помощью Docker Compose

После создания БД и генерации в ней тестовых данных вы можете запустить готовое приложение с помощью docker compose.

Зайдите в `docker-compose.yaml`, установите свои `env` на корректные и вызовите из корня проекта:

```bash
# В зависимости от версии docker-compose
$ docker compose up -d
# или
$ docker-compose up -d
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
