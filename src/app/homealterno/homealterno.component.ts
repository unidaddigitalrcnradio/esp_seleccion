import { Component, OnInit } from '@angular/core';
import { LeerArchivoService } from "../leerconfig.service";
import { Config } from "../config";

@Component({
  selector: 'app-homealterno',
  templateUrl: './homealterno.component.html',
  styleUrls: ['./homealterno.component.css']
})
export class HomealternoComponent implements OnInit {

  ruta ="../assets/config.json";
  objConfig:Config;
  marcador:boolean;
  mCol:string;
  mOtro:string;

  constructor(public _leerArchivo:LeerArchivoService) {

    this._leerArchivo.traerArchivo(this.ruta).subscribe(
      res=> {
        let data = res;

        let estado:string = data.estadoactivo;
        let marcador:boolean = data.marcador;
        let mCol:string = data.col;
        let mOtro:string = data.otro;
        let lista:Array<string> = data.listaestados;

        this.objConfig =  new Config(estado, marcador,mCol,mOtro,lista);

        this.Reglas(this.objConfig);

      }
    );
   }

  ngOnInit() {
  }

  Reglas(obj:Config){
    this.marcador = obj.marcador;
    this.mCol = obj.col;
    this.mOtro = obj.otro;

  }
}
