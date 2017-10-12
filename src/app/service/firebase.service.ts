import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

import { Configseg } from "../interfaces/configseg";
import { Youtube } from "../interfaces/youtube";
import { Video } from "../interfaces/video";
import { Livestream } from "../interfaces/livestream";

@Injectable()
export class FirebaseService {

  fireUrl:string="https://especialesrcn-e50ca.firebaseio.com/config.json";
  configUrl:string="https://especialesrcn-e50ca.firebaseio.com/config";
  key:string="-KwFwrkm87ZthXhYcwbr";

  constructor(private _http:Http) { }

  nuevaConfig(config:Configseg){
    let body = JSON.stringify(config);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this._http.post(this.fireUrl, body, {headers}).map( res =>{
      console.log(res.json());
      return res.json();
    });
  }

  getConfig(){
    let url = `${this.configUrl}/${this.key}.json`;
    console.log(url);
    return this._http.get(url).map(res=>res.json());
  }

  actualizarConfig(config:Configseg){
    let body = JSON.stringify(config);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.configUrl }/${this.key}.json`;

    return this._http.put(url, body, {headers}).map( res =>{
      console.log(res.json());
      return res.json();
    });
  }

  crearObjConfig(_json):Configseg{

        let _youtube = new Youtube(_json.video.youtube.codigo,_json.video.youtube.estadoy);
        let _livestream = new Livestream (_json.video.livestream.id,_json.video.livestream.src,_json.video.livestream.estadol);
        let _video = new Video(_youtube,_livestream);
        let config = new Configseg(_json.estado,_json.listaEstados,_video,_json.actvModVideo,_json.actvModDetalle,_json.actvModNoticias,_json.actvModDetalle2,_json.actvModGaleria);

        return config;
      }


}
