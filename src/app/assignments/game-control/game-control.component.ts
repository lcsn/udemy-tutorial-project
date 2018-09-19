import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: []
})
export class GameControlComponent implements OnInit {

  num = 0;
  ref: any;

  @Output() numIncremented = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.ref = setInterval(() => {
      this.num++;
      this.numIncremented.emit(this.num);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.ref);
    this.num = 0;
  }
}
