import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: []
})
export class CockpitComponent implements OnInit {

  @Output() elementAdded = new EventEmitter();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void { }

  onAddServer() {
    this.elementAdded.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.elementAdded.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
