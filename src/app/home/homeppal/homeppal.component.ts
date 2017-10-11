import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../service/firebase.service";
import { Configseg } from "../../interfaces/configseg";


import { LeerArchivoService } from "../../leerconfig.service";
import { Config } from "../../config";


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-homeppal',
  templateUrl: './homeppal.component.html',
  styleUrls: ['./homeppal.component.css']
})
export class HomeppalComponent implements OnInit {
  public objConfig:Configseg;


  constructor(public _leerArchivo:LeerArchivoService, private _fireb:FirebaseService) {

    this._fireb.getConfig().subscribe(res=>{
      this.objConfig = _fireb.crearObjConfig(res);

    });

   }

  ngOnInit() {
  }


}
