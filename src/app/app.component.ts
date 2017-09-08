import { Component } from '@angular/core';
import { Config } from "./config";
import { LeerArchivoService } from "./leerconfig.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Variables de control Global
  permaneceLive:boolean = false;
  permaneceNormal:boolean = false;
  permaneceContingencia:boolean = false;
  urlContingenci:string;
  estado:Config;
  liveHeader:boolean = false;

  //Variables de horarios
  offlive1:boolean = false;
  offlive2:boolean = false;
  offlive3:boolean = false;
  offlive4:boolean = false;
  offlive5:boolean = false;
  offlive6:boolean = false;
  live:boolean = false;
  porDefecto:boolean = false;
  now:Date = new Date();

  //Viernes
  dateOfflive1Ini = new Date(2017,8,8,11).getTime();
  dateOfflive1Fin = new Date(2017,8,8,15,30).getTime();
  dateOfflive2Ini = new Date(2017,8,8,18).getTime();
  dateOfflive2Fin = new Date(2017,8,9,10).getTime();

  //Sabado
  dateOfflive3Ini = new Date(2017,8,9,12,30).getTime();
  dateOfflive3Fin = new Date(2017,8,9,15,30).getTime();
  dateOfflive4Ini = new Date(2017,8,9,17).getTime();
  dateOfflive4Fin = new Date(2017,8,10,10,15).getTime();

  //Domingo
  dateOfflive5Ini = new Date(2017,8,10,14).getTime();
  dateOfflive5Fin = new Date(2017,8,10,16,15).getTime();
  dateOfflive6Ini = new Date(2017,8,10,19.30).getTime();
  dateOfflive6Fin = new Date(2017,8,12,10).getTime();

  constructor(private _serLeer:LeerArchivoService){
    let configData = new Config();

    _serLeer.traerArchivo().subscribe(
      data=>{
        configData.estado = data.estado;
        configData.urlCont = data.urlConti;
        configData.tipos = data.array;
        console.log(configData.urlCont);

        if(configData.estado == "live"){
          this.liveHeader = true;
          console.log("entro en live");
          this.permaneceLive =true;
        }else if(configData.estado == 'contingencia'){
          console.log("entro en contingencia");
          this.urlContingenci = configData.urlCont;
          this.permaneceContingencia = true;
        }else if(configData.estado == 'normal'){
          this.permaneceNormal = true;
          this.ejecucionNormal();
          console.log("entro en normal");
        }else{
          this.permaneceNormal = true;
          this.ejecucionNormal();
          console.log("no entro en ninguno");
        }
      }
    );
  }

  ejecucionNormal(){

    if(this.now.getTime() >= this.dateOfflive1Ini && this.now.getTime() <= this.dateOfflive1Fin){
      this.offlive1 = true;
    }else if(this.now.getTime() >= this.dateOfflive2Ini && this.now.getTime() <= this.dateOfflive2Fin){
      this.offlive2 = true;
    }else if(this.now.getTime() >= this.dateOfflive3Ini && this.now.getTime() <= this.dateOfflive3Fin){
      this.offlive3 = true;
    }else if(this.now.getTime() >= this.dateOfflive4Ini && this.now.getTime() <= this.dateOfflive4Fin){
      this.offlive4 = true;
    }else if(this.now.getTime() >= this.dateOfflive5Ini && this.now.getTime() <= this.dateOfflive5Fin){
      this.offlive5 = true;
    }else if(this.now.getTime() >= this.dateOfflive6Ini && this.now.getTime() <= this.dateOfflive6Fin){
      this.offlive6 = true;
    }else{
      this.live = true;
    }
  }
  
}
