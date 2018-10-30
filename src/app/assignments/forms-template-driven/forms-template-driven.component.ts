import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-template-driven',
  templateUrl: './forms-template-driven.component.html',
  styleUrls: ['./forms-template-driven.component.css']
})
export class FormsTemplateDrivenComponent {

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

}
