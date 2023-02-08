import { Component, OnInit } from '@angular/core';
import { CotacoesService } from './services/cotacoes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CotacaoDeMoedas';
  dados?: any;
  ehDolar = true;
  ehEuro = true;
  dataAtualizada?: Date;

  constructor(private cotacao: CotacoesService) {}

  pesquisar(moeda: string): void {
  
    if (moeda === 'USD') {
      this.ehDolar = true;
      this.ehEuro = false;
    }
    else if (moeda === 'EUR') {
      this.ehDolar = false;
      this.ehEuro = true;
    }
    else {
      this.ehDolar = false;
      this.ehEuro = false;
    }
    
    this.cotacao.ListarCotacao(moeda).subscribe({
      next: (retorno: any) => {
        this.dados = retorno;
        this.dataAtualizada = new Date(this.dados.USDBRL.create_date);
        
      }
    });
  }

}
