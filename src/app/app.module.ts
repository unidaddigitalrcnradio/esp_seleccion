import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LOCALE_ID} from '@angular/core';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticias/noticias.component';
import { GaleriaComponent } from './galerias/galeria.component';
import { RelojComponent } from './reloj/reloj.component';
import { RedesComponent } from './redessociales/redessociales.component';

//Servicios
import { LeerArchivoService } from "./leerconfig.service";
import { NoticiasService } from "./noticias/noticias.service";
import { AuthService } from "./service/auth.service";
import { AuthGuardService } from "./service/auth-guard.service";
//Routin
import { APP_ROUTING } from "./app.routes";

// PIPES
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HomeppalComponent } from './home/homeppal/homeppal.component';
import { HomealternoComponent } from './home/homealterno/homealterno.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from "./service/firebase.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    GaleriaComponent,
    RelojComponent,
    RedesComponent,
    DomseguroPipe,
    HomeppalComponent,
    HomealternoComponent,
    ConfigComponent,
    HomeComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"es"},
    LeerArchivoService,
    NoticiasService,
    FirebaseService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
