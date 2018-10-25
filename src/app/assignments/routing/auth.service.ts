import { Injectable } from '@angular/core';
import { LoggingService } from '../practice-service/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor(private log: LoggingService) { }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {resolve(this.loggedIn); }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.log.info('AuthService', 'login() called');
  }

  logout() {
    this.loggedIn = false;
    this.log.info('AuthService', 'logout() called');
  }

}
