import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorHistoryComponent } from './calculator-history.component';

describe('CalculatorHistoryComponent', () => {
  let component: CalculatorHistoryComponent;
  let fixture: ComponentFixture<CalculatorHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorHistoryComponent]
    });
    fixture = TestBed.createComponent(CalculatorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
