import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Stress } from './stress';
import { StressRunResult } from '../common/interfaces/dto_stress_setting';

@Entity()
export class StressRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(_type => Stress, stress => stress.stressRecords)
    stress: Stress;

    @Column('json')
    result: StressRunResult;

    @CreateDateColumn()
    createDate: Date;
}