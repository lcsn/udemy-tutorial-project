import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: []
})
export class OddComponent implements OnInit {

  @Input() data: number;

  constructor() { }

  ngOnInit() {
  }

}
