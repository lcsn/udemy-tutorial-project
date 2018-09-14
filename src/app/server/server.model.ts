export class Server {
  public id: number;
  public serverStatus: string;
  constructor(public serverName: string) {
    this.id = Math.floor(Math.random() * 100);
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }
}
