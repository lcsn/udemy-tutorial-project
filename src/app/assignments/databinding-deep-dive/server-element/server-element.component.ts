import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styles: [`
    p {
      color: blue;
    }
  `],
  encapsulation: ViewEncapsulation.None // Emulated, Native, with None the style is applied application-wide
})
export class ServerElementComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {

  // @Input() element: {type: string, serverName: string, serverContent: string};
  @Input() serverName: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    // Properties as shown below are not accessible until view is initialized
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('contentParagraph: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('contentParagraph: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

}
