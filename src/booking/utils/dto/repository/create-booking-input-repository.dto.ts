import { IsInt, IsUUID } from "class-validator";

import { BookingEntity } from "src/app/entity/booking.entity";


export class CreateBookingInputRepostoryDto implements Partial<BookingEntity> {
  @IsUUID()
  userId: string;

  @IsInt()
  eventId: number;
}
