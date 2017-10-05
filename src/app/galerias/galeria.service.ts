import {Injectable, } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Galeria} from './galeria';

@Injectable()
export class GaleriaService {

    constructor(private _http: Http) { }

    getJson(_url){
        // petición por get a esa url de un api rest de pruebas
		return this._http.get(_url).map(res => res.json());
	}

	crearObjGaleria(_json){
		let ArregloGaleria:Galeria[] = [];

		for (var k in _json) {
			let p = _json[k].images;
			for (var img of p) {
				let n =  new Galeria(img.path);
				ArregloGaleria.push(n);
			}


		}

	    return ArregloGaleria;
	}

	buscarPalabra(_miCadena, _buscar:string){
		let cuenta = 0;
		let posicion = _miCadena.search(_buscar);
		return posicion;
	}
	extraerImagen(_cadena:string){
		let cadenaMod:string = _cadena;
		let posMove = 0;
		let arrayImg:String[] = [];
		let _cadenaSplit = _cadena.split('<img');
		let cuantoImgExisten = _cadenaSplit.length;

		for (var index = 0; index < cuantoImgExisten -1; index++) {
			let posicionIni = this.buscarPalabra(cadenaMod, '<img');
			cadenaMod = cadenaMod.substr(posicionIni, cadenaMod.length);
			let posicionFin = this.buscarPalabra(cadenaMod, '/>');
			let img = cadenaMod.substring(0, posicionFin+2);
			arrayImg.push(img);
			cadenaMod = cadenaMod.substr(posicionFin+2, cadenaMod.length)

		}
		return arrayImg;

	}
	extraerURLimagen(_arreglo){
		let arregloFinal:string[] = [];

		for (var i = 0; i < _arreglo.length; i++) {
			//let cadenaMod:string = _arreglo[i];
			let posicionIni = this.buscarPalabra(_arreglo[i], 'src="')
			_arreglo[i] = _arreglo[i].substring(posicionIni, _arreglo[i].length);
			let posicionFin = this.buscarPalabra(_arreglo[i],'" ');
			let url = _arreglo[i].substring(5,posicionFin);
			arregloFinal.push(url);
		}
		return arregloFinal;
	}

}