import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsAndModulesComponent } from './functions-and-modules.component';

describe('FunctionsAndModulesComponent', () => {
  let component: FunctionsAndModulesComponent;
  let fixture: ComponentFixture<FunctionsAndModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionsAndModulesComponent]
    });
    fixture = TestBed.createComponent(FunctionsAndModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
