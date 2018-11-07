import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormsReactiveCustomValidators } from './forms-reactive-custom-validators';

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
      'project': new FormGroup({
        'name': new FormControl(
          null,
          [Validators.required, FormsReactiveCustomValidators.validateName],
          FormsReactiveCustomValidators.validateNameAsync
        ),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectForm);
    this.project.name = this.projectForm.value.project.name;
    this.project.email = this.projectForm.value.project.email;
    this.project.status = this.projectForm.value.project.status;
    this.projectForm.reset();
    // this.projectForm.reset({
    //   'project': {
    //     'name': '',
    //     'email': '',
    //     'status': ''
    //   }
    // });
  }

}
