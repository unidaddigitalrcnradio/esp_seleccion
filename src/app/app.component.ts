import { Component } from '@angular/core';
import { Config } from "./config";
import { LeerArchivoService } from "./leerconfig.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activo:boolean = false;

  objConfig:Config;

  ruta ="assets/config.json";
  constructor(public _leerArchivo:LeerArchivoService){

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

  Reglas(obj:Config){
    if(obj.estadoactivo == "ppal"){
      this.activo = true;
    }
  }

}
