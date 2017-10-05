import { Component, OnInit } from '@angular/core';
import { LeerArchivoService } from "../leerconfig.service";
import { Config } from "../config";


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-homeppal',
  templateUrl: './homeppal.component.html',
  styleUrls: ['./homeppal.component.css']
})
export class HomeppalComponent implements OnInit {
  urlContingenci;
  ruta ="../assets/config.json";
  objConfig:Config;


  constructor(public _leerArchivo:LeerArchivoService) {

    this._leerArchivo.traerArchivo(this.ruta).subscribe(
      res=> {
        let data = res;

        let estado:string = data.estadoactivo;
        let marcador:boolean = data.marcador;
        let mCol:string = data.col;
        let mOtro:string = data.otro;
        let lista:Array<string> = data.listaestados;
        let iframe:string = data.urlyoutube;

        this.objConfig =  new Config(estado, marcador,mCol,mOtro,lista, iframe);

        this.Reglas(this.objConfig);

      }
    );
   }

  ngOnInit() {
  }

  Reglas(obj:Config){
    this.urlContingenci = obj.urlIframe;
  }

}
