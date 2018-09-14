import { Component, OnInit } from '@angular/core';
import {Server} from '../server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName: string;
  serverCreated = false;

  servers: Server[] = [
    new Server('Moo1'),
    new Server('Moo2')
  ]

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() { }

  isEnabled(): boolean {
    return !this.allowNewServers || !this.serverName;
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.servers.push(new Server(this.serverName));
    setTimeout(() => { this.serverCreated = false; }, 3000);
  }

}
