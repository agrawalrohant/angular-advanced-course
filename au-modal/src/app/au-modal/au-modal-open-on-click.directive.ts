import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[auModelOpenOnClick]'
})
export class AuModalOpenOnClickDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  @Input()
  set auModelOpenOnClick(els) {
    let elements: HTMLBaseElement[];

    // convert into an array if not already
    if (els.length) {
      elements = els;
    } else {
      elements = [els];
    }

    // Add click event listner
    elements.forEach(element => {
      element.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      })
    });
  }
}
