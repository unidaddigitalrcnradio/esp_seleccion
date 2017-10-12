import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuardService {

  constructor(private auth:AuthService) { }

    canActivate(_next:ActivatedRouteSnapshot, _state:RouterStateSnapshot){
      console.log("Este es el next");
      console.log(_next);

      console.log("Este es el state");
      console.log(_state);

      // if(this.auth.isAuthenticated()){
      //   console.log("Paso el guard");
      //   return true;
      // }else{
      //   console.error("Bloqueado por el Guard")
      //   return false;
      // }
    }
}
