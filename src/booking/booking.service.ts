import { Injectable, Logger } from '@nestjs/common';

import { BookingRepository } from './repository/booking.repository';

import { BookingReserveHttpDto } from './utils/dto/http/booking-reserve.http-dto';
import { CreateBookingInputRepostoryDto } from './utils/dto/repository/create-booking-input-repository.dto';



@Injectable()
export class BookingService {
  private readonly logger = new Logger(BookingService.name);
  
  constructor(
    private readonly bookingRepository: BookingRepository,
  ) { }


  public async createBooking(dto: BookingReserveHttpDto): Promise<any> {
    const repositoryDto: CreateBookingInputRepostoryDto = {
      eventId: dto.event_id,
      userId: dto.user_id,
    };

    return await this.bookingRepository.createBooking(repositoryDto);
  }

}
