import { Body, ConflictException, Controller, HttpCode, HttpStatus, Logger, Post, ValidationPipe } from '@nestjs/common';

import { BookingService } from './booking.service';

import { BookingReserveHttpDto } from './utils/dto/http/booking-reserve.http-dto';

import { UniqueFieldsRepositoryError } from 'src/app/utils/error/repository/unique-fields.repository-error';



@Controller('bookings')
export class BookingController {
  private readonly logger = new Logger(BookingController.name);

  constructor(
    private readonly bookingService: BookingService,
  ) { }


  @Post('reserve')
  @HttpCode(HttpStatus.CREATED)
  async reserve(@Body(new ValidationPipe({
    transform: true,
    transformOptions: { excludeExtraneousValues: true },
  })) dto: BookingReserveHttpDto): Promise<any> {
    await this.bookingService.createBooking(dto)
      .catch((err) => {
        if (err instanceof UniqueFieldsRepositoryError) {
          throw new ConflictException('Бронирование для этого пользователя и события уже существует');
        }
    });


    return {
      message: 'Бронирование прошло успешно!',
    };
  }
}
