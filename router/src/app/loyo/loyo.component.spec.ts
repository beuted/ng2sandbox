/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoyoComponent } from './loyo.component';

describe('LoyoComponent', () => {
  let component: LoyoComponent;
  let fixture: ComponentFixture<LoyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
