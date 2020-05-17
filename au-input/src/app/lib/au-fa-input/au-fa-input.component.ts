import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

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

  ngOnInit() {
  }

  class = "fa fa-envelope"

  get classes() {
    const cssClasses = {
      'fa': true
    }

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }



}
