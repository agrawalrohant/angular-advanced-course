import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuModelComponent } from './au-model.component';

describe('AuModelComponent', () => {
  let component: AuModelComponent;
  let fixture: ComponentFixture<AuModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
