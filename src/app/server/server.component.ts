import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h2 {
      color: aqua;
    }
  `]
})
export class ServerComponent {
  @Input() serverId = -1;
  @Input() serverStatus = 'n.a.';

  getServerStatus(): string {
    return this.serverStatus;
  }
}
