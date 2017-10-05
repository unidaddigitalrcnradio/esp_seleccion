import { Component } from '@angular/core';
// Importamos la clase del servicio
import {NoticiasService} from '../noticias/noticias.service';
import {ArrayNoticias} from '../noticias/arraynoticia';
import {Noticia} from '../noticias/noticias';
import { DomSanitizer } from '@angular/platform-browser';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers:[NoticiasService]
})

export class NoticiaComponent{

public errorMessage;
public arrayAntena2: Array<Noticia>;
public arrayRCN: Array<Noticia>;
public jsonFm;
public finBloque1;
public finBloque2;
public finBloque3;
public contNoticia = 'bloque2';

constructor(private _notiServ: NoticiasService, private sanitizer: DomSanitizer){
    this._notiServ.getJson('http://www.antena2.com.co/v1/ws/noticias?tid=40')
                                    .subscribe(
                                        result => {
                                                this.jsonFm = result;

                                                //Recorrer el arreglo
                                             this.arrayAntena2 = this._notiServ.crearObjNoti(this.jsonFm);

                                             this.finBloque1 = this.add6(this.arrayAntena2, 1);
                                             this.finBloque2 = this.add6(this.arrayAntena2, 2);
                                             this.finBloque3 = this.add6(this.arrayAntena2, 3);
                                            },
                                        error => {
                                            this.errorMessage = <any>error;
                                            if (this.errorMessage !== null){
                                                console.log(this.errorMessage);
                                                alert('Error en la petición');
                                            }
                                        }
                                    );

  }

    unirArchivos(_array1, _array2){
        return this._notiServ.crearListaCompleta(_array1, _array2);
    }


    add6(_array,_bloque){
        let _array6:Noticia[] = [];
        switch (_bloque) {
            case 1:
                for (var i = 0; i < 6; i++) {
                    _array6.push(_array[i]);
                }
                break;
            case 2:
                for (var i = 6; i < 12; i++) {
                    _array6.push(_array[i]);
                }
                break;
            case 3:
                for (var i = 12; i < 18; i++) {
                    _array6.push(_array[i]);
                }
                break;

            default:
                for (var i = 0; i < _array.length; i++) {
                    _array6.push(_array[i]);
                }
                break;
        }
        return _array6;
    }
    agregarNoticias(){
        if (this.contNoticia === 'bloque2'){
                    // Usamos jQuery
            $('.bloque2').slideToggle();
            this.contNoticia = 'bloque3';

        }else if (this.contNoticia === 'bloque3'){
                    // Usamos jQuery
            $('.bloque3').slideToggle();
            this.contNoticia = 'bloque4';
        }

    }
}