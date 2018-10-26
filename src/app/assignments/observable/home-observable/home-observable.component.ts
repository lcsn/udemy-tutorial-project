import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-observable',
  templateUrl: './home-observable.component.html',
  styleUrls: ['./home-observable.component.css']
})
export class HomeObservableComponent implements OnInit, OnDestroy {

  numberObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // chaining operators on observables is possible
    // the map operator maps the observable into another observable
    // without the rxjs-compat package you have to change the imports and the way the operator methods are used
    const myNumbers = interval(1000)
      .pipe(map(
        (data: number) => {
          return data * 2;
        }
      ))
      .pipe(map(
        (data: number) => {
          return data - 1;
        }
      ));
    this.numberObservableSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        // Push next data package
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        // Push next data package
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // Push next data package
        observer.complete();
        // observer.error('this does not work');
      }, 5000);
      setTimeout(() => {
        // Push next data package
        observer.next('third package');
      }, 6000);
    });
    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('completed') }
    );
  }

  ngOnDestroy() {
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }

}
