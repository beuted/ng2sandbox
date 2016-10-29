/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutorouteListComponent } from './autoroute-list.component';

describe('AutorouteListComponent', () => {
  let component: AutorouteListComponent;
  let fixture: ComponentFixture<AutorouteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorouteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
