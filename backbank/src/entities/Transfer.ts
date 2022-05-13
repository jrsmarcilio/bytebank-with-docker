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

  @Column('decimal', { precision: 8, scale: 2, nullable: false })
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
