import { Component } from '@angular/core';
import { AlertsComponent } from '../alerts.component';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    p {
      color: green;
    }
  `]
})
export class SuccessAlertComponent extends AlertsComponent {

  message = 'Success!';

}
