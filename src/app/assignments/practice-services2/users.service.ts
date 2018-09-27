import {
  EventEmitter,
  Injectable,
  Output
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() userActive = new EventEmitter<number>();
  @Output() userInactive = new EventEmitter<number>();

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor() { }

  setUserToActive(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setUserToInactive(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

}
