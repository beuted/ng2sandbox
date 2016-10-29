/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoloComponent } from './yolo.component';

describe('YoloComponent', () => {
  let component: YoloComponent;
  let fixture: ComponentFixture<YoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
