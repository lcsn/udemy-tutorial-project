import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservableUsersService } from '../observable-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-observable.component.html',
  styleUrls: ['./user-observable.component.css']
})
export class UserObservableComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
    private obsUsersService: ObservableUsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate(): void {
    this.obsUsersService.userActivated.next(this.id);
  }

}
