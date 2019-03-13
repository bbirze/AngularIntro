import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSubscibeComponent } from './sport-subscibe.component';

describe('SportSubscibeComponent', () => {
  let component: SportSubscibeComponent;
  let fixture: ComponentFixture<SportSubscibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportSubscibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSubscibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
