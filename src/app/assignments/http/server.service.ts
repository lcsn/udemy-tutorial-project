import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  getAppName(): Observable<string> {
    return this.http.get('https://udemy-ng-http-3ccd2.firebaseio.com/appName.json')
      .pipe(
        map((response: Response) => {
          const data = response.json();
          return data;
        })
      )
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  storeServers(servers: any[]): Observable<any> {
    // request is not sent yet - because it is an observable beneath the hood, you have to subscribe to the returned observable
    // .json at the is firebase specific
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // Append the data with HTTP-Verb Post
    // return this.http.post('https://udemy-ng-http-3ccd2.firebaseio.com/data.json', servers, { headers: headers });
    // Overwrite the data with HTTP-Verb Post
    return this.http.put('https://udemy-ng-http-3ccd2.firebaseio.com/data.json', servers, { headers: headers });
  }

  getServers(): Observable<any> {
    // no use of rxjs-compat therefore i have to use pipe(map())
    return this.http.get('https://udemy-ng-http-3ccd2.firebaseio.com/data')
      .pipe(
        map((response: Response) => {
          const data = response.json();
          // for (const server of data) {
          //   server.name = 'FETCHED_' + server.name;
          // }
          return data;
        })
      )
      .pipe(catchError((error: Response) => {
        return throwError('Something went wrong');
      }));
  }

}
