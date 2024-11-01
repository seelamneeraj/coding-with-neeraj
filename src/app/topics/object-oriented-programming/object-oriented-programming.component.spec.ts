import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOrientedProgrammingComponent } from './object-oriented-programming.component';

describe('ObjectOrientedProgrammingComponent', () => {
  let component: ObjectOrientedProgrammingComponent;
  let fixture: ComponentFixture<ObjectOrientedProgrammingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectOrientedProgrammingComponent]
    });
    fixture = TestBed.createComponent(ObjectOrientedProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
