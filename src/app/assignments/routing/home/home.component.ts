import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLoadServers(): void {
    // maybe compley calculation
    // this.router.navigate(['/practice', 'routing', 'servers']);
    this.router.navigate(['servers'], {relativeTo: this.route});
  }

  onLoadServer(id: number): void {
    this.router.navigate(['servers', id], {relativeTo: this.route, queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  onLoadUsers(): void {
    // maybe compley calculation
    // this.router.navigate(['/practice', 'routing', 'servers']);
    this.router.navigate(['users'], {relativeTo: this.route});
  }

}
