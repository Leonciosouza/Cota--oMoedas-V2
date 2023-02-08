import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {

  constructor(private http: HttpClient) { }

  ListarCotacao(moeda: string): Observable<any>{
    return this.http.get(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`);
  }
}
