import { Component, OnInit } from '@angular/core';
import { CotacoesService } from '../services/cotacoes.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  cotacoes: any[] = [];


  constructor(
    private cotacoesService: CotacoesService) { }

  ngOnInit(){
    this.onListar();
  }

  onListar(){
    this.cotacoesService.ListarCotacao('USD').subscribe( cotacoes =>{ this.cotacoes = cotacoes.data;
    });


  }
}
