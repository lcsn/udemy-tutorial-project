import { Component, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  template: `
    <input type="text" (keydown)="0" value="MOO FOO MOO" #input>
    <p>{{ input.value }}</p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class NgContentExampleComponent {
  @ViewChild('input') input: ElementRef;
  @ContentChild('paragraph') paragraph: ElementRef;
  constructor() {
    setTimeout(() => {
      this.input.nativeElement.value = 'Wert überschrieben';
      this.paragraph.nativeElement.innerText = 'Noch krassere Ansage';
    }, 3000);
  }
}
