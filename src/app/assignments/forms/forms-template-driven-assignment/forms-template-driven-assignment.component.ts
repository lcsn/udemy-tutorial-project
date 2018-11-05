import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template-driven-assignment',
  templateUrl: './forms-template-driven-assignment.component.html',
  styleUrls: ['./forms-template-driven-assignment.component.css']
})
export class FormsTemplateDrivenAssignmentComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.securityData.password;
    console.log(this.user);

    this.submitted = true;

    this.signupForm.reset();
    this.signupForm.form.patchValue({
      email: '',
      subscription: 'advanced',
      password: ''
    });
  }

}
