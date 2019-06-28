import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderoComponent } from './headero.component';

describe('HeaderoComponent', () => {
  let component: HeaderoComponent;
  let fixture: ComponentFixture<HeaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
