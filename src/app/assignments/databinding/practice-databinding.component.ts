import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-databinding',
  templateUrl: './practice-databinding.component.html',
  styles: [`
    .red-border {
      border: 1px solid red;
    }
  `]
})
export class PracticeDatabindingComponent implements OnInit {

  title = 'Databinding';

  myName = 'Lars';

  aNumber = 100;

  attachClass = false;

  moo: string;

  username: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.attachClass = true;
    }, 3000);
  }

  sayMoo(evt: string): void {
    this.moo = evt;
  }

}
