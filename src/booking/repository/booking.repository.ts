import { QueryFailedError, Repository } from "typeorm";

import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { BookingEntity } from "../../app/entity/booking.entity";

import { PostgresErrorCodesEnum } from "../../app/utils/enum/postgres-error-codes.enum";

import { CreateBookingInputRepostoryDto } from "../utils/dto/repository/create-booking-input-repository.dto";

import { UniqueFieldsRepositoryError } from "src/app/utils/error/repository/unique-fields.repository-error";



@Injectable()
export class BookingRepository {
  private readonly logger = new Logger(BookingRepository.name);


  constructor(
    @InjectRepository(BookingEntity) private readonly bookingRepository: Repository<BookingEntity>,
  ) { }


  public async createBooking(dto: CreateBookingInputRepostoryDto): Promise<any> {
    const bookingEntityInstance = this.bookingRepository.create(dto);

    const newBooking = await this.bookingRepository
      .save(bookingEntityInstance)
      .catch((err) => {
        if (!(err instanceof QueryFailedError)) throw err;

          const errObj = err as typeof err & { code: string };

        if (errObj.code === PostgresErrorCodesEnum.UNIQUE_VIOLATION) {
          this.logger.error(`При добавлении записи в БД произошла ошибка дубликатов уникальных полей: ${errObj.driverError.detail}`);


          throw new UniqueFieldsRepositoryError('', '', [{
            reason: errObj.driverError.detail,
            field: errObj.parameters?.join(', ')!,
          }]);
        } else {
          throw err;
        }
    });

    this.logger.log(`Новая запись бронирования мероприятия(события) успешно добавлена в БД`);


    return newBooking;
  }

}
