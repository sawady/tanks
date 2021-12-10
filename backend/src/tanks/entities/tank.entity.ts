import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: string;

  @Column()
  lot: string;

  @Column()
  manufacturer: string;

  @Column()
  gasType: string;
}
