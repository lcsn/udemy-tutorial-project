import {
  Component,
  OnInit
} from '@angular/core';
import { UsersService2 } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: {id: number, name: string}[] = [];

  constructor(private usersService2: UsersService2) { }

  ngOnInit(): void {
    this.users = this.usersService2.getUsers();
  }

  selectUser(user: {id: number, name: string}): void {
    this.usersService2.userSelected.emit(user);
  }

}
