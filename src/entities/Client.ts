import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "city" })
  city: string;

  @Column({ name: "state" })
  state: string;

  @Column({ name: "country" })
  country: string;

  @Column({ name: "industry_codes" })
  industryCodes: string;

  @Column({ name: "active" })
  active: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
