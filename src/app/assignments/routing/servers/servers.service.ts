import {
  EventEmitter,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers: {id: number, name: string, status: string}[] = [
    {
      id: 0,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 1,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 2,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  // serverSelect = new EventEmitter<{id: number, name: string, status: string}>();

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
    // return this.servers[id];
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    /*
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    */
    const server = this.getServer(id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
