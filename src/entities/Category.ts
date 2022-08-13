import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
