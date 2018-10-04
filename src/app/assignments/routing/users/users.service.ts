import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService2 {

  users = [
    {
      id: 0,
      name: 'Max'
    },
    {
      id: 1,
      name: 'Anna'
    },
    {
      id: 2,
      name: 'Chris'
    }
  ];

  userSelected = new EventEmitter<{id: number, name: string}>();

  getUsers(): {id: number, name: string}[] {
    return this.users.slice();
  }
}
