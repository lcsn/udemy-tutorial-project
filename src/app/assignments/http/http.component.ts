import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  servers = [
    // {
    //   name: 'Testserver',
    //   capacity: 10,
    //   id: this.generateId()
    // },
    // {
    //   name: 'Liveserver',
    //   capacity: 100,
    //   id: this.generateId()
    // }
  ];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.onGet();
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe((response: any) => {
        console.log(response);
      }),
      (error: any) => {
        console.log(error);
      };
  }

  onGet() {
    this.serverService.getServers()
      .subscribe((servers: any[]) => {
        // unwrap the data in the response with .json()-Method
        // update: data is unwrapped via rxjs operator pipe(map()) in the getServers()-Method
        console.log(servers);
        this.servers = servers;
      }),
      (error: any) => {
        console.log(error);
      };
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
