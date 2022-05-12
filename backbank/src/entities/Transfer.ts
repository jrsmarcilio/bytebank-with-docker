import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "transfers" })
class Transfer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "decimal", nullable: false, precision: 8, scale: 2 })
  value: number;

  @Column({ nullable: false })
  destination: string;

  @Column({ nullable: false })
  transfer: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Transfer };
