import { Directive, TemplateRef, ViewContainerRef, Input, ContentChild, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { AuModalComponent } from './au-modal.component';
import { AuModalService } from './modal.service';

@Directive({
  selector: '[auModelOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {

  elements: HTMLBaseElement[];

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modelService: AuModalService) { }

  ngOnDestroy(): void {
    this.elements.forEach(element => {
      element.removeEventListener('click', this.clickHandler)
    })
  }

  ngOnInit(): void {
    this.modelService.close$.subscribe(() => {
      this.viewContainer.clear();
    })
  }



  @ContentChild(AuModalComponent, { static: false })
  modal: AuModalComponent


  @Input()
  set auModelOpenOnClick(els) {

    // convert into an array if not already
    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    // Add click event listner
    this.elements.forEach(element => {
      element.addEventListener('click', this.clickHandler)
    });
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);
}
