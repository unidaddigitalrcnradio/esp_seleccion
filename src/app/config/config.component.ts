import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { Config } from "../config";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  forma:FormGroup;
  arr: FormArray;

  radioGpEstados ;

  config:Object = {
    estado:"otros",
    listaEstados:["prev","ppal", "otros", "mas"],
    video:{
      youtube:{
        codigo:"ASDFASDFAS",
        activo:true
      },
      livestream:{
        id:"ASDF",
        src:"ASDFASDF",
        activo:false
      }
    },
    actvModVideo:false,
    actvModDetalle:false,
    actvModNoticas:true,
    actvModDetalle2:false,
    actvModGaleria:true
  }

  constructor( private _fb: FormBuilder) {

    this.crearForm();

    console.log(this.forma);
   }

  ngOnInit() {

  }

  crearForm(){
    this.arr = this._fb.array([]);

        for (let k of this.config['listaEstados']) {
          this.arr.push(this._fb.control(k));
        }

        this.forma = this._fb.group({
          estado: this.config['estado'],
          listaEstados:this.arr,
          video: this._fb.group({
            youtube: this._fb.group({
              codigo:this.config['video']['youtube']['codigo'],
              activo:this.config['video']['youtube']['activo']
            }),
            livestream: this._fb.group({
              id: this.config['video']['livestream']['id'],
              src: this.config['video']['livestream']['src'],
              activo:this.config['video']['livestream']['activo']
            }),
          }),
          actvModVideo: this.config['actvModVideo'],
          actvModDetalle: this.config['actvModDetalle'],
          actvModNoticas: this.config['actvModNoticas'],
          actvModDetalle2: this.config['actvModDetalle2'],
          actvModGaleria: this.config['actvModGaleria']
        });

  }

  cambioCar(data){
    this.radioGpEstados = data;
  }

guardarCambios(){
  console.log();
}




}
