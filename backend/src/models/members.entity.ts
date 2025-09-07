import { Entity, Column, ObjectId, ObjectIdColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

@Entity()
export class Member {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MEMBER,
    nullable: false,
  })
  role: UserRole;
}

export type MemberType = {
  id: string;
  name: string;
  password?: string;
  role?: UserRole;
};

export type ProfileType = {
  id: string;
  name: string;
  role?: UserRole;
};
