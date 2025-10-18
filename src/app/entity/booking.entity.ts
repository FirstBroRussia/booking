import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

import { UserEntity } from "./user.entity";
import { EventEntity } from "./event.entity";



@Entity({ name: 'bookings' })
@Unique(['eventId', 'userId'])
export class BookingEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    
  })
  createdAt: Date;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    name: 'user_id',
    type: 'uuid',
  })
  userId: string;

  @ManyToOne(() => EventEntity, (event) => event.bookings, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'event_id',
  })
  event: EventEntity;

  @Column({
    name: 'event_id',
    type: 'int',
  })
  eventId: number;

}

