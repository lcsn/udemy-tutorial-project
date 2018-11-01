import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template-driven',
  templateUrl: './forms-template-driven.component.html',
  styleUrls: ['./forms-template-driven.component.css']
})
export class FormsTemplateDrivenComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm): void {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

}
