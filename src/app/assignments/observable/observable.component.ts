import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableUsersService } from './observable-users.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  user1Activated = false;
  user2Activated = false;

  constructor(private obsUsersService: ObservableUsersService) { }

  ngOnInit() {
    // a subject is observer and observable at the same time
    // use a subject instead of a eventemitter for cross-component-communication
    this.obsUsersService.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = !this.user1Activated;
      } else if (id === 2) {
        this.user2Activated = !this.user2Activated;
      }
    });
  }

  ngOnDestroy() {
    this.obsUsersService.userActivated.unsubscribe();
  }

}
