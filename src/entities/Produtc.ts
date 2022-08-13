import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description?: string;

  @Column()
  active?: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;
}
