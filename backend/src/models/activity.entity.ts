import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  ObjectId,
} from 'typeorm';

export enum ActivityStatus {
  CANCELLED = 'cancelled',
  LIVE = 'live',
  UPCOMING = 'upcoming',
  COMPLETED = 'completed',
}

@Entity()
export class Activity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ length: 30 })
  name: string;

  @CreateDateColumn()
  date: Date;

  @Column({ nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ActivityStatus,
    default: ActivityStatus.UPCOMING,
    nullable: false,
  })
  status: ActivityStatus;
}
