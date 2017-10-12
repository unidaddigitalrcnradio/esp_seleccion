import { Component, OnInit } from '@angular/core';
import { Configseg } from "../interfaces/configseg";
import { FirebaseService } from "../service/firebase.service";
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public config:Configseg;


  constructor( private _fireb:FirebaseService, private auth:AuthService) {
    this.auth.handleAuthentication();
    this._fireb.getConfig().subscribe(res=>{
      this.config = _fireb.crearObjConfig(res);

    });

   }


  ngOnInit() {
  }

}
