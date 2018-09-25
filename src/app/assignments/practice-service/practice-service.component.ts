import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-practice-service',
  templateUrl: './practice-service.component.html',
  styles: []
})
export class PracticeServiceComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

}
