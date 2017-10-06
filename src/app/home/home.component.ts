import { Component, OnInit } from '@angular/core';
import { Config } from "../config";
import { LeerArchivoService } from "../leerconfig.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activo:boolean;
  objConfig:Config;
  ruta ="assets/config.json";

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

   Reglas(obj:Config){
    if(obj.estadoactivo == "ppal"){
      this.activo = true;
    }else{
      this.activo = false;
    }
  }

  ngOnInit() {
  }

}
