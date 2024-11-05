import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(); // Instancia o livro usando o construtor padrão
  public autoresForm: string = ''; // Atributo para capturar autores como texto
  public editoras: Array<Editora> = []; // Array para armazenar as editoras

  // Injeta os serviços ControleEditoraService, ControleLivrosService e o roteador Router
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Preenche o vetor de editoras ao inicializar o componente
    this.editoras = this.servEditora.getEditoras();
  }

  // Método para incluir o livro, com redirecionamento para a rota '/lista'
  incluir = (): void => {
    // Preenche o atributo autores do livro com uma lista separada por quebras de linha
    this.livro.autores = this.autoresForm.split('\n');
    // Chama o método incluir do serviço ControleLivrosService
    this.servLivros.incluir(this.livro);
    // Navega para a rota "/lista"
    this.router.navigateByUrl('/lista');
  };
}
