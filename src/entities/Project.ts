import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Client } from "./Client";
import { Product } from "./Produtc";

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Client, { eager: true })
  client: Client;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Product)
  @JoinTable({ name: "projects_products" })
  products: Product[];

  @Column()
  active: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
