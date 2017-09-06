import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activar:boolean;
  date:Date = new Date();
  dateactivo = new Date(2017,8,6,16).getTime();

  constructor(){
    if(this.date.getTime() <= this.dateactivo){
      this.activar = true;
    }else{
      this.activar = false;
    }
  //console.log(this.dateactivo);
  }
  
}
