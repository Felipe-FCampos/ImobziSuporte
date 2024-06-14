import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidaComponent } from './duvida.component';

describe('DuvidaComponent', () => {
  let component: DuvidaComponent;
  let fixture: ComponentFixture<DuvidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuvidaComponent]
    });
    fixture = TestBed.createComponent(DuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
