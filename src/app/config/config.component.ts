import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Config } from "../config";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  forma:FormGroup;

  radioGpEstados;
  listados = ["prev","ppal", "otros", "mas"];

  config:Object = {
    estado:"",
    listaEstados:["prev","ppal"],
    videoActivo:"",
    video:{
      youtube:{
        codigo:""
      },
      livestream:{
        id:"",
        src:""
      }
    },
    actvModVideo:"",
    actvModEnVivo:"",
    actvModDetalle:"",
    actvModNoticas:"",
    actvModDetalle2:"",
    actvModGaleria:""
  }

  constructor() {

    this.forma = new FormGroup({
      'estado': new FormControl(),
      'videoActivo': new FormControl(),
      'video': new FormGroup({
        'youtube': new FormGroup({
          'codigo': new FormControl()
        }),
        'livestream' : new FormControl({
          'id': new FormControl(),
          'src': new FormControl()
        }),
      }),
      'actvModVideo': new FormControl(),
      'actvModEnVivo': new FormControl(),
      'actvModDetalle': new FormControl(),
      'actvModNoticas': new FormControl(),
      'actvModDetalle2': new FormControl(),
      'actvModGaleria': new FormControl()

    });

    //console.log(this.forma);
    this.forma.reset(this.config);
   }

  ngOnInit() {
  }

}
