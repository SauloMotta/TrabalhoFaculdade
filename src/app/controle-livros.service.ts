import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro A',
      resumo: 'Resumo do Livro A',
      autores: ['Autor 1', 'Autor 2'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro B',
      resumo: 'Resumo do Livro B',
      autores: ['Autor 3'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro C',
      resumo: 'Resumo do Livro C',
      autores: ['Autor 4', 'Autor 5'],
    },
  ];

  // Método que retorna todos os livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método que adiciona um novo livro ao vetor de livros
  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  // Método que exclui um livro pelo código
  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
