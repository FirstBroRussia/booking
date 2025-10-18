import { Expose } from "class-transformer";
import { IsInt, IsUUID } from "class-validator";



export class BookingReserveHttpDto {
  @Expose()
  @IsInt()
  event_id: number;

  @Expose()
  @IsUUID()
  user_id: string;
}
