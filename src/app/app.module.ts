// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [AppComponent, LivroListaComponent, LivroDadosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicione o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
