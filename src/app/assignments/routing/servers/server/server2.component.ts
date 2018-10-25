import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {
  ActivatedRoute,
  Params, Router, Data
} from '@angular/router';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serversService: ServersService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id']
    // this.server = this.serversService.getServer(id);
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];  
    });
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    // this.serversService.serverSelect.subscribe((server: {id: number, name: string, status: string}) => {
    //   this.server = server;
    // });
  }

  isOnline(): string {
    if (this.server.status === 'online') {
      return 'green';
    } else if (this.server.status === 'offline') {
      return 'red';
    }
    return 'gray';
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
