import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { LOCALE_ID} from '@angular/core';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticias/noticias.component';
import { GaleriaComponent } from './galerias/galeria.component';
import { RelojComponent } from './reloj/reloj.component';
import { RedesComponent } from './redessociales/redessociales.component';


@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    GaleriaComponent,
    RelojComponent,
    RedesComponent
    ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
