/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JpLogoComponent } from './jp-logo.component';

describe('JpLogoComponent', () => {
  let component: JpLogoComponent;
  let fixture: ComponentFixture<JpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
