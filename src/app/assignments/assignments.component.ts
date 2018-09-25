import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styles: [`
    .odd {
      color: red;
    }
  `]
})
export class AssignmentsComponent implements OnInit {

  // A.5
  odd_data: number[] = [];
  even_data: number[] = [];

  // A.7
  onlyOdd = false;
  numbers: number[] = [1, 2, 3, 4, 5];
  odd_numbers = [1, 3, 5];
  even_numbers = [2, 4];

  constructor() { }

  ngOnInit() { }

  // A.5
  onNumIncremented(num: number) {
    if (num % 2 === 0) {
      this.even_data.push(num);
    } else {
      this.odd_data.push(num);
    }
  }

  onReset(data: boolean): void {
    if (data) {
      this.odd_data = [];
      this.even_data = [];
    }
  }

  // A.7

}
