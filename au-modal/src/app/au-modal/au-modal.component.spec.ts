import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuModalComponent } from './au-modal.component';
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import { AuInputModule } from 'au-input';
import { AuTabPanelComponent } from 'au-tab-panel/src/app/au-tab-panel/au-tab-panel.component';
import { AuTabPanelModule } from 'au-tab-panel';
import { AuModalModule } from './au-modal.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuModalComponent', () => {
  let component: AuModalComponent;
  let fixture: ComponentFixture<AuModalComponent>,
    el: DebugElement,
    modal: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuModalComponent],
      imports: [AuInputModule, AuTabPanelModule, AuModalModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuModalComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    modal = el.query(By.css('#testModal'))
    fixture.detectChanges();
  });

  it('should create the test application', async(() => {
    expect(component).toBeTruthy();
  }));


  it('should not add modal to the page, if the modal is close', async(() => {
    expect(modal).toBeFalsy();
  }));

  it('should open the modal when the button is clicked', async(() => {

    fixture.nativeElement.querySelector('#testButton').click();
    fixture.detectChanges();
    const openedModal = fixture.nativeElement.querySelector('#testModal')
    expect(openedModal).toBeTruthy();
  }));

});
