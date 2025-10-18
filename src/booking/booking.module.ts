import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingEntity } from 'src/app/entity/booking.entity';
import { EventEntity } from 'src/app/entity/event.entity';
import { UserEntity } from 'src/app/entity/user.entity';
import { BookingController } from './booking.controller';
import { BookingRepository } from 'src/booking/repository/booking.repository';
import { BookingService } from './booking.service';




@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      BookingEntity,
      EventEntity,
    ]),
  ],
  controllers: [
    BookingController,
  ],
  providers: [
    BookingRepository,
    BookingService,
  ]
})
export class BookingModule {}
