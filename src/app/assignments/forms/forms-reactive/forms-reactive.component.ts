import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  genders = ['male', 'female'];

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
