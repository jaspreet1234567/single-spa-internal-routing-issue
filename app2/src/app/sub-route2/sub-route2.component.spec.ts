import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRoute2Component } from './sub-route2.component';

describe('SubRoute2Component', () => {
  let component: SubRoute2Component;
  let fixture: ComponentFixture<SubRoute2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRoute2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
