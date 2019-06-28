import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteroComponent } from './footero.component';

describe('FooteroComponent', () => {
  let component: FooteroComponent;
  let fixture: ComponentFixture<FooteroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
