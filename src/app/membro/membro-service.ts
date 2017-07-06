import { API_MEMBRO } from './../app.api';
import { Membros } from './membros/membros.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()
export class MembroService {

  constructor(private http: Http) { }
  getMembros(){
    return this.http.get(`${API_MEMBRO}/membros/`).map(res => res.json().Membros)
    
  }
  getmembro(id:string){
    return this.http.get(`${API_MEMBRO}/membros/${id}`).map(res => res.json().Membros)

  }

}
