import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRoute1Component } from './sub-route1.component';

describe('SubRoute1Component', () => {
  let component: SubRoute1Component;
  let fixture: ComponentFixture<SubRoute1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRoute1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
