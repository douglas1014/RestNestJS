import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('Livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro) {
    await this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<Livro> {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    await this.livrosService.apagar(params.id);
  }
}
