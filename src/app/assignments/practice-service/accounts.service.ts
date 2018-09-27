import {EventEmitter, Injectable} from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: {name: string, status: string}[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logService: LoggingService) { }

  addAccount(newAccount: {name: string, status: string}): void {
    this.accounts.push(newAccount);
  }

  onStatusChanged(data: {id: number, newStatus: string}): void {
    this.accounts[data.id].status = data.newStatus;
    this.logService.logStatusChange(data.newStatus);
  }

}
