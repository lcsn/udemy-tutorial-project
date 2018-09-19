import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`
    p {
      color: aqua;
    }
  `]
})
export class OddComponent implements OnInit {

  @Input() data: number;

  constructor() { }

  ngOnInit() {
  }

}
