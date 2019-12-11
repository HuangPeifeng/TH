import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooisComponent } from './toois.component';

describe('TooisComponent', () => {
  let component: TooisComponent;
  let fixture: ComponentFixture<TooisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
