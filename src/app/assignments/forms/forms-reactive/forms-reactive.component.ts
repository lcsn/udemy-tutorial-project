import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];  

  constructor() { }

  // this must be bound via calling bind(this) - angular calls the validator method and this references to a different space
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((change) => {
    //   console.log(change);
    // });
    this.signupForm.statusChanges.subscribe(() => {
      console.log(this.signupForm.status);
    });
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'moo@foo.de'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Lars'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
    this.signupForm.reset({
      'userData': {
        'username': '',
        'email': ''
      },
      'hobbies': []
    });
  }

  onAddHobby() {
    // Without casting the hobbies FormArray in the Form to the type FormArray there would be an error
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Specifying the return in typescript as a JSON object by describing the key-value-pair
  // Returning null indicates that the validation was ok
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  // mocks an async email validation e.g. when the validation depends on some remote server response
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
