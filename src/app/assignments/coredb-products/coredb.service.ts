import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from './product.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoredbService {

  constructor(private http: Http) { }

  getProducts(n: number): Observable<Product[]> {
    return this.http.get('http://localhost:8080/coredb_service_collection/rest/products/maxresult/' + n)
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
}
