import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  ObjectId,
} from 'typeorm';

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
}
