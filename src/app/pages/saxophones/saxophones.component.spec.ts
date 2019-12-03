import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaxophonesComponent } from './saxophones.component';

describe('SaxophonesComponent', () => {
  let component: SaxophonesComponent;
  let fixture: ComponentFixture<SaxophonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaxophonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaxophonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
