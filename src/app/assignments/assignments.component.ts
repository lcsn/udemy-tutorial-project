import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styles: []
})
export class AssignmentsComponent implements OnInit {

  odd_data: number[] = [];
  even_data: number[] = [];

  constructor() { }

  ngOnInit() {
  }

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

}
