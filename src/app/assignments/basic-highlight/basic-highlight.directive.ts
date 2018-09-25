import {
  Directive,
  ElementRef, OnInit
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    // not a good practice
    this.elementRef.nativeElement.style.background = 'green';
  }

}
