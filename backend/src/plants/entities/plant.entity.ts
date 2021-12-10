import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ default: false })
  approved: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedDate: Date;
}
