import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzatestComponent } from './pizzatest.component';

describe('PizzatestComponent', () => {
  let component: PizzatestComponent;
  let fixture: ComponentFixture<PizzatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
