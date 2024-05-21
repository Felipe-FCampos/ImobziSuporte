import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultasejurosComponent } from './multasejuros.component';

describe('MultasejurosComponent', () => {
  let component: MultasejurosComponent;
  let fixture: ComponentFixture<MultasejurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultasejurosComponent]
    });
    fixture = TestBed.createComponent(MultasejurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
