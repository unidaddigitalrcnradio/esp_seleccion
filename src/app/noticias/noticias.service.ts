	// tslint:disable-next-line:indent
import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DOCUMENT } from '@angular/platform-browser';

import {Noticia} from './noticias';

@Injectable()
export class NoticiasService {
	// tslint:disable-next-line:indent
	constructor(private _http: Http, @Inject(DOCUMENT) private document: any) { }

	getJson(_url){
		// petición por get a esa url de un api rest de pruebas
		return this._http.get(_url).map(res => res.json());

	}

	crearObjNoti(_json){

		let ArregloNoticias:Noticia[] = [];

		for (var i = 1; i < 10; i++) {

			var id = _json[i].id;
			var titulo:string = _json[i].title;

			titulo = this.arreglarStrings('&#8216;','"', titulo);
			titulo = this.arreglarStrings('&#8217;','"', titulo);
			titulo = titulo.substr(0,71);

			var teaser: string = _json[i].teaser;

				teaser = teaser.trim();
				teaser = this.arreglarStrings('<p>','', teaser);
				teaser = this.arreglarStrings('</p>','', teaser);
				teaser = this.arreglarStrings('<strong>','', teaser);
				teaser = this.arreglarStrings('</strong>','', teaser);



			var fecha:Date = _json[i].created;
			var rutaUrl = _json[i].path;
			var logoMarca = "http://www.antena2.com.co/sites/default/files/imagenes/logoantena2_1372437936.jpg?1372437936";
			var img = _json[i].image;
			var contenido = "";

			let n = new Noticia(id, titulo.substring(0,73) ,teaser.substring(0,78) ,fecha , rutaUrl,logoMarca , img ,contenido);
    		ArregloNoticias.push(n);


		}

		return ArregloNoticias;
	}

//Crea una lista completa y la ordena
	crearListaCompleta(noti1: Noticia[] ,noti2: Noticia[]){
		let ArregloNoticias1:Noticia[] = [];

		for (const _n of noti1)
		{ArregloNoticias1.push(_n);

		}

		for (const _n2 of noti2)
		{ArregloNoticias1.push(_n2);
		}


		var n = ArregloNoticias1.length;
		var k;


		for (var m = n; m >= 0; m--)
		{
			for (var i = 0; i < n - 1; i++) {
				k = 1 +i;
				if(ArregloNoticias1[i].dateNoti < ArregloNoticias1[k].dateNoti)
				{
					this.swapElements(i,k, ArregloNoticias1);
				}
			}


		}
		return ArregloNoticias1;

	}

	 swapElements(i: number, j: number, arg: Noticia[]){
		var temp;
		temp = 	arg[i];
		arg[i] = arg[j];
		arg[j] = temp;

	}
	addImagenJson(allnoti){
		let errorMessage;
		for (let i = 0; i < allnoti.length; i++) {
			let imgDatos;
			let valor:string = allnoti[i].urlImg;
			if (valor === 'sinImagen'){
				allnoti[i].urlImg = 'http://image.rcn.com.co.s3.amazonaws.com/rcnradio/prev2.jpg';
			}else{
				this.getJson(valor).subscribe(
					result => {
						imgDatos = result;
						allnoti[i].urlImg = imgDatos.source_url;

					},
					error => {
						errorMessage = <any>error;
						if (errorMessage !== null){
							allnoti[i].urlImg = 'http://image.rcn.com.co.s3.amazonaws.com/rcnradio/prev2.jpg';
							console.log(errorMessage);
						}
					});
			}
		}
	return allnoti;
	}

	arreglarStrings(_dato, _remplazo, _string:string){
		let StringArreglado = _string.replace(_dato,_remplazo);
		return StringArreglado;
	}
}