import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

    constructor(private _dom:DomSanitizer){}

  transform(value: string, url: string): any {
    return this._dom.bypassSecurityTrustResourceUrl(url + value);
  }

}