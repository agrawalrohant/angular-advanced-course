import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'au-model',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {


  @Input()
  body: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
