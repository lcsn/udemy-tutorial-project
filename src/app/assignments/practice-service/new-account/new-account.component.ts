import { Component } from '@angular/core';
// import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styles: []
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
              // private log: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((newStatus: string) => {
      alert('New Status: ' + newStatus);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount({
      name: accountName,
      status: accountStatus
    });
    // this.log.logStatusChange(accountStatus);
  }
}
