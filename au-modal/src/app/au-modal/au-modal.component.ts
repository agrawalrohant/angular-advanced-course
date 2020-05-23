import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { AuModalService } from './modal.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'au-model',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {


  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnEsc: boolean = true;

  @Input()
  hideOnClickOutside: boolean = true;

  @Input()
  context: any;

  constructor(
    private modelService: AuModalService,
    private eventManager: EventManager) { }

  ngOnInit() {
    if (this.hideOnEsc) {
      this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
        this.close();
      });
    }
  }

  onClickOutsideModal() {
    if (this.hideOnClickOutside) {
      this.close();
    }
  }

  close() {
    this.modelService.close();
  }

  cancelClick(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
