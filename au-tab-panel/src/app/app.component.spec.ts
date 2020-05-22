import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuTabPanelComponent,
        AuTabComponent
      ],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>, el: DebugElement, component: AppComponent, tabPanel: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement;
    component = el.componentInstance;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  });

  it('should create the text appl', async(() => {
    expect(component).toBeTruthy();
  }));

  it("should find only one tab inside the tab container", async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it("should find the Contact tab buttonmarked as active", async(() => {
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe("Contact");
  }));

  it('should display the Contacts tab', async(() => {
    const selectedTab = tabPanel.query(By.css('.contact-email')).nativeElement;
    expect(selectedTab).toBeTruthy();
  }));

  it('should switch to the login tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[0].nativeElement.click();

    fixture.detectChanges();

    const loginTab = tabPanel.query(By.css('.login-email')).nativeElement;
    expect(loginTab).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe("Login");

  }))
});
