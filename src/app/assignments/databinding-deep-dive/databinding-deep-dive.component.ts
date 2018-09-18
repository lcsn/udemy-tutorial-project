import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-deep-dive',
  templateUrl: './databinding-deep-dive.component.html',
  styles: [`
    .container {
      margin-top: 30px;
    }
    p {
      color: blue;
    }
  `]
})
export class DatabindingDeepDiveComponent {

  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onElementAdded(element: any) {
    this.serverElements.push(element);
  }
}
