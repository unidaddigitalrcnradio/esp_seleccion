import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  offlive1:boolean = false;
  offlive2:boolean = false;
  live:boolean = false;
  porDefecto:boolean = false;

  now:Date = new Date();
  dateOfflive1Ini = new Date(2017,8,7,14).getTime();
  dateOfflive1Fin = new Date(2017,8,7,15,30).getTime();
  dateOfflive2Ini = new Date(2017,8,7,18).getTime();
  dateOfflive2Fin = new Date(2017,8,8,10,30).getTime();


  // Pruebas
  // dateOfflive1Ini = new Date(2017,8,7,14).getTime();
  // dateOfflive1Fin = new Date(2017,8,7,15,30).getTime();
  // dateOfflive2Ini = new Date(2017,8,7,18).getTime();
  // dateOfflive2Fin = new Date(2017,8,8,10,30).getTime();


  constructor(){
    if(this.now.getTime() >= this.dateOfflive1Ini && this.now.getTime() <= this.dateOfflive1Fin){
      this.offlive1 = true;
    }else if(this.now.getTime() >= this.dateOfflive2Ini && this.now.getTime() <= this.dateOfflive2Fin){
      this.offlive2 = true;
    }else{
      this.live = true;
    }
  }
  
}
