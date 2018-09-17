import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      Check console!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes['name'].currentValue);
    console.log(changes['name'].previousValue);
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngDoCheck() {
    console.log('DoCheck');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
