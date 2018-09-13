import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;

  serverCreationStatus = 'No server was created!';

  serverName: string;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() { }

  onCreateServer(): void {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

}
