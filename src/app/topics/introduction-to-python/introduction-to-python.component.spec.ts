import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToPythonComponent } from './introduction-to-python.component';

describe('IntroductionToPythonComponent', () => {
  let component: IntroductionToPythonComponent;
  let fixture: ComponentFixture<IntroductionToPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionToPythonComponent]
    });
    fixture = TestBed.createComponent(IntroductionToPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
