import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

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
export class ServerElementComponent implements OnInit {

  // @Input() element: {type: string, serverName: string, serverContent: string};
  @Input() serverName: string;

  constructor() { }

  ngOnInit() {
  }

}
