import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorComponent } from './lor.component';

describe('LorComponent', () => {
  let component: LorComponent;
  let fixture: ComponentFixture<LorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
