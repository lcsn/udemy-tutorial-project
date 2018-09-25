import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
    // better approach to access the DOM
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(event: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.bgColor = 'transparent';
  }

}
