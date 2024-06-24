import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrfTableComponent } from './irrf-table.component';

describe('IrrfTableComponent', () => {
  let component: IrrfTableComponent;
  let fixture: ComponentFixture<IrrfTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrrfTableComponent]
    });
    fixture = TestBed.createComponent(IrrfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
