import {
  Component,
  OnInit
} from '@angular/core';
import { UsersService2 } from '../users.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private usersService2: UsersService2,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      this.user = this.usersService2.users[userId];
    }
    this.usersService2.userSelected.subscribe(
      (user) => { this.user = user; },
      (err: any) => { console.log(err); }
      );
  }

  goToUser(): void {
    this.router.navigate([this.user.id - 1], {relativeTo: this.route})
      .then(() => { console.log('ready'); })
      .catch((err: any) => { console.log(err); });
  }

}
