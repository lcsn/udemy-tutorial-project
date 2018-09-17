import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      Hi, my name is {{ myName }} and i am {{ myAge }} years old!
    </p>`,
  styles: [``]
})
export class PropertyBindingComponent implements OnInit {

  @Input() myName: string;
  @Input() myAge: number;

  constructor() { }

  ngOnInit() {
  }

}
