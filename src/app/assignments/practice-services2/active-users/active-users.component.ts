import {
  Component,
  OnInit
} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.usersService.userActive.subscribe((id: number) => {
      this.usersService.setUserToActive(id);
    });
  }

  onSetToInactive(id: number, event: Event) {
    event.preventDefault();
    this.usersService.userInactive.emit(id);
  }
}
