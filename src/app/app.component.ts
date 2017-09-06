import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activar:boolean;
  activarPapa:boolean;

  date:Date = new Date();
  dateactivo = new Date(2017,8,6,16).getTime();
  datefinEvento = new Date(2017,8,6,18).getTime();

  constructor(){
    if(this.date.getTime() >= this.dateactivo){
      
      if(this.date.getTime() >= this.datefinEvento ){
        this.activarPapa = true;
        this.activar = false;
      }else{
        this.activar = true;
        this.activarPapa = false;
      }
    }else{
      this.activar = false;
      this.activarPapa = false;
    }
  }
  
}
