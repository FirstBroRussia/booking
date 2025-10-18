import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookingEntity } from "./booking.entity";



@Entity({
  name: 'events',
})
export class EventEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'total_seats',
    type: 'int',
  })
  totalSeats: number;

  @OneToMany(() => BookingEntity, (booking) => booking.event)
  bookings: BookingEntity[];

}
