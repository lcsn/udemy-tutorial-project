import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-deep-dive',
  templateUrl: './databinding-deep-dive.component.html',
  styles: [`
    .container {
      margin-top: 30px;
    }
  `]
})
export class DatabindingDeepDiveComponent {

  serverElements = [{type: 'server', serverName: 'Testserver', serverContent: 'Just a test!'}];

  onServerAdded(server: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      serverName: server.serverName,
      serverContent: server.serverContent
    });
  }

  onBlueprintAdded(blueprint: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      serverName: blueprint.serverName,
      serverContent: blueprint.serverContent
    });
  }
}
