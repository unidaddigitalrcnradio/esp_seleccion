import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

import { Configseg } from "../configseg";

@Injectable()
export class FirebaseService {

  fireUrl:string="https://heroesapp-79e08.firebaseio.com/heroes.json";
  heroeUrl:string="https://heroesapp-79e08.firebaseio.com/heroes/";


  constructor(private _http:Http) { }

  getHeroe(key$:string){
    let url = `${this.heroeUrl}/${key$}.json`;
    return this._http.get(url).map(res=>res.json());
  }

  // actulizarHeroe(heroe:Heroe, key$:string){
  //   let body = JSON.stringify(heroe);
  //   let headers = new Headers({
  //     'Content-Type':'application/json'
  //   });

  //   let url = `${ this.heroeUrl }/${key$}.json`;

  //   return this._http.put(url, body, {headers}).map( res =>{
  //     console.log(res.json());
  //     return res.json();
  //   });
  // }

}
