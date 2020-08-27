import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G5Component } from './g5.component';

describe('G5Component', () => {
  let component: G5Component;
  let fixture: ComponentFixture<G5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
