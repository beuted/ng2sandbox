/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutorouteComponent } from './autoroute.component';

describe('AutorouteComponent', () => {
  let component: AutorouteComponent;
  let fixture: ComponentFixture<AutorouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
