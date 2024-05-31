import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaspropComponent } from './diasprop.component';

describe('DiaspropComponent', () => {
  let component: DiaspropComponent;
  let fixture: ComponentFixture<DiaspropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaspropComponent]
    });
    fixture = TestBed.createComponent(DiaspropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
