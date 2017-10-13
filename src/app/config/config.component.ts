import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { Configseg } from "../interfaces/configseg";
import { Livestream } from "../interfaces/livestream";
import { Youtube } from "../interfaces/youtube";
import { Video } from "../interfaces/video";
import { FirebaseService } from "../service/firebase.service";
import { AuthService } from "../service/auth.service";
import { AuthGuardService } from "../service/auth-guard.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public crearNuevo:boolean = false;
  public activoNuevoform:boolean = false;

  public notificacion:boolean = false;
  public mensajeNoti:string = "";

  fecha:Date;
  _configJson;
  _l:Livestream = new Livestream("","", false);
  _y:Youtube = new Youtube("", false);
  video:Video = new Video(this._y,this._l)
  arrC:Array<string> = [""];
  private config:Configseg = new Configseg("",this.arrC,this.video,false,false,false,false,false,this.hoyDate(),'');

  public activoYou:boolean;
  public activoLive:boolean;

  public forma:FormGroup;
  arrForm: FormArray;

  radioGpEstados ;
  profile: any;
  perfilLeo:any;

  constructor( private _fb: FormBuilder, private _fireb:FirebaseService,
              public auth:AuthService, private _routes:Router)
  {
    this.auth.handleAuthentication();

    this.perfilLeo = JSON.parse(localStorage.getItem('profile'));
    console.log(this.perfilLeo);

    if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
      this.profile = profile; });
                }

    _fireb.getConfig().subscribe( cnfg=>{
      this._configJson = cnfg;

      if(this._configJson == null){
        this.crearNuevo = true;
        this.forma = this.crearForm(this.config);

      }else{
      this.config = _fireb.crearObjConfig(this._configJson);
      this.forma =this.crearForm(this.config);

        //Esto escucha solo un objeto del form, ejemplo video
        this.forma.controls['video'].valueChanges.subscribe(
          data=>{

            this.activoLive = data['livestream']['estadol'];
            this.activoYou = data['youtube']['estadoy'];
          });

                  //Esto escucha solo un objeto del form, ejemplo video
        this.forma.controls['video'].valueChanges.subscribe(
          list=>{
          });
        }


    });

        // //Esto escucha el status del objeto del form, ejemplo username
        // this.forma.controls['username'].statusChanges.subscribe(
        //   data=>{
        //     console.log(data);
        //   });

   }

  ngOnInit() {

  }

  crearForm(_config:Configseg):FormGroup{

    let formulario:FormGroup;
    this.arrForm = this._fb.array([]);

        for (let k of _config.listaEstados) {
          this.arrForm.push(this._fb.control(k));
        }

        formulario = this._fb.group({
          estado: _config.estado,
          listaEstados:this.arrForm,
          video: this._fb.group({
            youtube: this._fb.group({
              codigo:_config.video.youtube.codigo,
              estadoy:_config.video.youtube.estadoy
            }),
            livestream: this._fb.group({
              id: _config.video.livestream.id,
              src: _config.video.livestream.src,
              estadol: _config.video.livestream.estadol
            }),
          }),
          actvModVideo: _config.actvModVideo,
          actvModDetalle: _config.actvModDetalle,
          actvModNoticias: _config.actvModNoticias,
          actvModDetalle2: _config.actvModDetalle2,
          actvModGaleria: _config.actvModGaleria
        });

        return formulario;

  }

  cambioCar(data){
    this.radioGpEstados = data;
  }

  guardarCambios(){

    let nombre = this.profile.name;
    let est:string;
    let estadoy:boolean = this.forma.value.video.youtube.estadoy;
    let estadol:boolean = this.forma.value.video.livestream.estadol;
    let y:Youtube = new Youtube(this.forma.value.video.youtube.codigo,estadoy);
    let l:Livestream = new Livestream(this.forma.value.video.livestream.id,this.forma.value.video.livestream.src,estadol);
    let video:Video = new Video(y,l);
    let arr:Array<string> = [];

    for (var k of this.forma.value.listaEstados) {
      arr.push(k);
     }

     if(this.radioGpEstados == undefined){
       est = this.forma.value.estado;
     }else{
       est = this.radioGpEstados;
     }

    let nuevaConfig:Configseg = new Configseg(est,arr,video,
      this.forma.value.actvModVideo,this.forma.value.actvModDetalle,this.forma.value.actvModNoticias,
      this.forma.value.actvModDetalle2,this.forma.value.actvModGaleria,this.hoyDate(),nombre);


     this._fireb.actualizarConfig(nuevaConfig).subscribe(
       res=>{
          // this.recargar();
           this.alertaNueva('Usted a modificado el contenido');

       }
     );

  }

  agregarEstados(){
    ( <FormArray>this.forma.controls['listaEstados']).push(
      new FormControl("", Validators.required)
    )
  }

  crearNuevoForm(){
    this.activoNuevoform = true;
  }

  guardarNuevoForm(){
    var fecha:number =  Date.now();
    let nombre = this.profile.name;
    let est:string;
    let y:Youtube = new Youtube(this.forma.value.video.youtube.codigo,this.forma.value.video.youtube.estadoy);
    let l:Livestream = new Livestream(this.forma.value.video.livestream.id,this.forma.value.video.livestream.src,this.forma.value.video.livestream.estadol);
    let video:Video = new Video(y,l);
    let arr:Array<string> = [];

    for (var k of this.forma.value.listaEstados) {
      arr.push(k);
     }

     est = this.forma.value.estado;

    let nuevaConfig:Configseg = new Configseg(est,arr,video,
      this.forma.value.actvModVideo,this.forma.value.actvModDetalle,this.forma.value.actvModNoticias,
      this.forma.value.actvModDetalle2,this.forma.value.actvModGaleria,this.hoyDate(),nombre);

      this._fireb.nuevaConfig(nuevaConfig).subscribe(res=>{
        this.alertaNueva("Copie el siguiente código y peguelo en el servicio de firebase.service.ts en la variable key linea 12:" + ' \n ' + res.name);
      })

  }

  alertaNueva(resp:string): void {
    this.notificacion = true;
    this.mensajeNoti = resp;
    //this.recargar();
  }

  recargar(){
    window.location.reload();
  }

  salir(){
    this.auth.logout();
    this._routes.navigate(['home']);
  }

  hoyDate():number{
    var today:number = Date.now();

    return today;
  }

}
