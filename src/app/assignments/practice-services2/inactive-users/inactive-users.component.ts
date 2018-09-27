import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.usersService.userInactive.subscribe((id: number) => {
      this.usersService.setUserToInactive(id);
    });
  }

  onSetToActive(id: number) {
    this.usersService.userActive.emit(id);
  }
}
