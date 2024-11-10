import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['date', 'location'])
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column('timestamp')
  @IsNotEmpty()
  date: Date;

  @Column()
  @IsNotEmpty()
  location: string;
}
