import {Component, Input} from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h2 {
      color: aqua;
    }
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {

  @Input() server: Server;

  constructor() { }

  getServerStatus(): string {
    return this.server.serverStatus;
  }

  getColor(): string {
    if (this.server.serverStatus === 'online') {
      return 'green';
    }
    return 'red';
  }
}
