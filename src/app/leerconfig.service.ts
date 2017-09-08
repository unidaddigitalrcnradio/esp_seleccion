import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeerArchivoService {
    _url = "../../assets/config.json";
    constructor(private _http: Http) { 
    }

    traerArchivo(){
        let ObjJson = this._http.get(this._url).map(res => res.json());
		return ObjJson;
    }
    
}