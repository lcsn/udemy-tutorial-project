import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations-example1',
  templateUrl: './animations-example1.component.html',
  styleUrls: ['./animations-example1.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(600px)'
      })),
      transition('highlighted => normal', animate(1000)),
      transition('normal => highlighted', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(150px) translateY(-50px) rotate(90deg)',
            'background-color': 'red',
            offset: 0.25
          }),
          style({
            transform: 'translateX(300px) translateY(0) rotate(180deg)',
            'background-color': 'green',
            offset: 0.5
          }),
          style({
            transform: 'translateX(450px) translateY(50px) rotate(270deg)',
            'background-color': 'black',
            offset: 0.75
          }),
          style({
            transform: 'translateX(600px) translateY(0) rotate(360deg)',
            'background-color': 'blue',
            offset: 1
          })
        ]))
      ])
    ]),
    trigger('inputState', [
      state('focus', style({
        'background-color': 'lightgray',
        borderRadius: '0'
      })),
      state('nofocus', style({
        'background-color': 'lightyellow',
        borderRadius: '25px'
      })),
      state('error', style({
        'background-color': 'red',
        borderRadius: '0'
      })),
      transition('error => *', 
        animate(500, keyframes([
          style({
            'background-color': 'green',
            offset: 0
          }),
          style({
            'background-color': 'lightgray',
            offset: 1
          })
        ]))
      ),      
      transition('* => error',
        animate(250, keyframes([
          style({
            borderRadius: 0,
            transform: 'translateX(-10px)',
            'background-color': 'red',
            offset: 0.20
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.40
          }),
          style({
            transform: 'translateX(-10px)',
            offset: 0.60
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.80
          }),
          style({
            transform: 'translateX(0px)',
            offset: 1
          })          
        ]))
      ),
      transition('nofocus <=> focus',
        animate(200)
      )
    ])
  ]
})
export class AnimationsExample1Component implements OnInit {

  state = 'normal';
  inputState = 'nofocus';

  myText = '';

  error = false;

  constructor() { }

  ngOnInit() {
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onAnimateInput() {
    if (this.error) {
      this.inputState = 'error';
    } else {
      this.inputState == 'nofocus' ? this.inputState = 'focus' : this.inputState = 'nofocus'; 
    }    
  }

}
