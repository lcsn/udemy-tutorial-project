import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.width = '100px';
    elRef.nativeElement.style.height = '100px';
    setInterval(() => {
      const rand = Math.ceil(Math.random() * 100);
      if ( rand % 2 === 0 ) {
        elRef.nativeElement.style.backgroundColor = 'gold';
      } else {
        elRef.nativeElement.style.backgroundColor = 'green';
      }
    }, 500);
  }

}
