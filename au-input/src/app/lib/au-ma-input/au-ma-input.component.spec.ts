import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuMaInputComponent } from './au-ma-input.component';

describe('AuMaInputComponent', () => {
  let component: AuMaInputComponent;
  let fixture: ComponentFixture<AuMaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuMaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuMaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
