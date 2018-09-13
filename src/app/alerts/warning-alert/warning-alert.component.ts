import { Component } from '@angular/core';
import { AlertsComponent } from '../alerts.component';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    p {
      color: red;
    }
  `]
})
export class WarningAlertComponent extends AlertsComponent {

  message = 'Warning!';

}
