import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directive',
  templateUrl: './practice-directive.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class PracticeDirectiveComponent implements OnInit {

  displayDetails = false;

  messages: string[] = [];

  constructor() { }

  ngOnInit() { }

  onClick(): void {
    this.displayDetails = !this.displayDetails;
    this.messages.push(new Date().toUTCString());
  }

}
