import {
  Directive,
  HostBinding,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';

  @HostBinding('style.backgroundColor') color;
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;

  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor;
  }

  ngOnInit(): void {
    this.color = this.defaultColor;
  }

}
