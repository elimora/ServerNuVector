import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Activity } from "./Activity";
import { Category } from "./Category";
import { Client } from "./Client";
import { Contractor } from "./Contractor";
import { Product } from "./Produtc";
import { Project } from "./Project";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Contractor, { eager: true })
  contractor: Contractor;

  @Column()
  duration: number;

  @Column()
  billable_flag: boolean;

  @Column()
  date: Date;

  @ManyToOne(() => Project, { eager: true })
  project: Project;

  @ManyToOne(() => Client, { eager: true })
  client: Client;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Activity, { eager: true })
  activity: Activity;

  @ManyToOne(() => Category, { eager: true })
  category: Category;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
