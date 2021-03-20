import { Livro } from './livro.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private livroRepository: Repository<Livro>,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroRepository.find();
  }

  async obterUm(id: number): Promise<Livro> {
    return this.livroRepository.findOne(id);
  }

  async criar(livro: Livro): Promise<void> {
    await this.livroRepository.save(livro);
  }

  async alterar(livro: Livro): Promise<Livro> {
    return this.livroRepository.save({
      id: livro.id,
      ...livro,
    });
  }

  async apagar(id: number): Promise<void> {
    await this.livroRepository.delete(id);
  }
}
