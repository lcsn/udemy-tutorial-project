import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import { UsersService2 } from '../users.service';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  private paramsSubscription: Subscription;

  constructor(private usersService2: UsersService2,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const userId = this.route.snapshot.params['id'];
    // If the component is recreated from within itself angular won't render it again.
    // It reloads the data, but if params.snapshot is used, the data has not changed.
    // To keep track of the data subscribe to the observable params on the route.
    // It is triggered each time the params is changed.
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user = this.usersService2.users[params['id']];
      },
        (err: any) => {
        console.log('Err: ' + err);
      },
        () => {
          console.log('Completed: Params update!');
        });
    // if (userId) {
    //   this.user = this.usersService2.users[userId];
    // }
    this.usersService2.userSelected.subscribe(
      (user) => { this.user = user; },
      (err: any) => { console.log(err); }
      );
  }

  ngOnDestroy() {
    // This is optional. Angular will take care of removing the subscription.
    // But the subscription is not removed simultaneously when the component is destroyed.
    this.paramsSubscription.unsubscribe();
  }

  goToUser(): void {
    // this.router.navigate([this.user.id - 1], {relativeTo: this.route})
    this.router.navigate(['/practice', 'routing', 'users', this.user.id])
      .then(() => { console.log('ready'); })
      .catch((err: any) => { console.log(err); });
  }

}
