import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="onClick()" class="square">
      Click me!
    </div>
  `,
  styles: [`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid blueviolet;
    }
  `]
})
export class EventBindingComponent implements OnInit {

  @Output() moo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.moo.emit(new Date().toUTCString());
  }

}
