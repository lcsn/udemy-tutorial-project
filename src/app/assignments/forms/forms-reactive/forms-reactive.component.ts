import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  
  constructor() { }

  ngOnInit() {
  }

}
