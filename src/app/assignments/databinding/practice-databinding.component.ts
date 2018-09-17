import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-databinding',
  templateUrl: './practice-databinding.component.html',
  styles: []
})
export class PracticeDatabindingComponent implements OnInit {

  title = 'Databinding';

  myName = 'Lars';

  moo: string;

  username: string;

  constructor() { }

  ngOnInit() {
  }

  sayMoo(evt: string): void {
    this.moo = evt;
  }

}
