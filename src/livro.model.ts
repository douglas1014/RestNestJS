import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nome: string;

  @Column()
  preco: number;
}
