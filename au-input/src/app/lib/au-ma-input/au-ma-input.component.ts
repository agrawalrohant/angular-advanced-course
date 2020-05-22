import { Component, OnInit, Input, AfterContentInit, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/directive/input-ref.directive';

@Component({
  selector: 'au-ma-input',
  templateUrl: './au-ma-input.component.html',
  styleUrls: ['./au-ma-input.component.css']
})
export class AuMaInputComponent implements AfterContentInit {

  @Input()
  icon: string;
  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  constructor() { }


  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

}
