import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-reactive-assign',
  templateUrl: './forms-reactive-assign.component.html',
  styleUrls: ['./forms-reactive-assign.component.css']
})
export class FormsReactiveAssignComponent implements OnInit {

  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  submitted = false;
  project = {
    'name': '',
    'email': '',
    'status': ''
  }

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.validateName.bind(this)]),
      'name': new FormControl(null, [Validators.required], this.validateNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectForm);
    this.project.name = this.projectForm.value.name;
    this.project.email = this.projectForm.value.email;
    this.project.status = this.projectForm.value.status;
  }

  validateName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'forbiddenName': true};
    }
    return null;
  }

  validateNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'forbiddenName': true});
        }
        else {
          resolve(null);
        }
      }, 1200);
    });
    return promise;
  }

}
