import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';
declare var $:any;
@Component({
  selector: 'reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
  })

export class RelojComponent{
//   <div>
//   <iframe id="papafrancisco" src="http://especiales.rcn.com.co/rcnradio/contador/contador.php" width="100%" height="60" frameborder="0" scrolling="no"></iframe>
// </div>
  // @ViewChild('selectElem') el:ElementRef;
  //   public elemento;
  //   ngAfterViewInit() {
  //     function($){$.fn.cuentaAtras = function() {
  //       return this.each (function(indice) {
  //         if ($(this).attr('id') === undefined) $(this).attr('id', 'cntdwn'+indice);
  //         if ($(this).attr('title') === undefined) $(this).attr ('title', '¡Es la hora!');
  //         var fecha = new Date ($(this).text()),
  //         contenedor = '#'+$(this).attr('id'),
  //         mensaje = $(this).attr('title');
  //         $.fn.cuentaAtras.refresca(Math.floor(new Date(fecha-new Date()).valueOf()/1000), contenedor, mensaje);
  //       });
  //     };
    
  //     $.fn.cuentaAtras.refresca = function(secs, id, mensaje) {
    
  //       function calcage(secs, num1, num2) {
  //         s = ((Math.floor(secs/num1))%num2).toString();
  //         if (s.length < 2)
  //           s = "0" + s;
  //         return s;
  //       };
    
  //       if (secs < 0) {
  //         $(id).html(mensaje);
  //       } else {
  //         var dia = calcage(secs,86400,100000),
  //         hora = calcage(secs,3600,24),
  //         min = calcage(secs,60,60),
  //         seg = calcage(secs,1,60);
    
  //         $(id).html (dia+"d "+hora+":"+min+":"+seg);
  //         setTimeout("$.fn.cuentaAtras.refresca(" + (secs-1) + ", '" + id + "', '"+ mensaje +"')", 1000);
  //       };
    
  //       return this;
  //     };
    
  //   })(jQuery);
   // }
}