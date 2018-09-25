import { Injectable } from '@angular/core';

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

  addAccount(newAccount: {name: string, status: string}): void {
    this.accounts.push(newAccount);
  }

  onStatusChanged(data: {id: number, newStatus: string}): void {
    this.accounts[data.id].status = data.newStatus;
  }

}
