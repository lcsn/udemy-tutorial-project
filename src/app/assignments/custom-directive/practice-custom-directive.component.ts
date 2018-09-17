import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pracitice-custom-directive',
  templateUrl: './practice-custom-directive.component.html',
  styles: []
})
export class PracticeCustomDirectiveComponent implements OnInit {

  title = 'Custom directive';

  switch: true;

  constructor() { }

  ngOnInit() {
  }

}
