import { DataSource } from 'typeorm';

import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';

import { appEnvConfigValidateFn } from './utils/config/app-env.config';

import { AppEnvInterface } from './utils/interface/app-env.interface';

import { UserEntity } from './entity/user.entity';
import { BookingEntity } from './entity/booking.entity';
import { EventEntity } from './entity/event.entity';

import { BookingRepository } from '../booking/repository/booking.repository';
import { BookingModule } from 'src/booking/booking.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: process.env.ENV_PATH || '.env',
      validate: appEnvConfigValidateFn,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configSevice: ConfigService<AppEnvInterface>) => ({
        type: 'postgres',
        url: configSevice.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);
  

  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
  ) { }

  
  async onModuleInit() {
    this.dataSource.isInitialized && this.logger.log('✅ Подключение к БД прошло успешно!');
  }
  
}
