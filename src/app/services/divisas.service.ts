import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { divisas } from 'src/entidades/divisasGet';
@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  private api = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,
    //private _HttpClient: HttpClient,
    ) { }

    GetDivisas() {
      return  this.http.get(this.api);
    }

}
