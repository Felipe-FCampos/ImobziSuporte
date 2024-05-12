import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaImpostoComponent } from './calcula-imposto.component';

describe('CalculaImpostoComponent', () => {
  let component: CalculaImpostoComponent;
  let fixture: ComponentFixture<CalculaImpostoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculaImpostoComponent]
    });
    fixture = TestBed.createComponent(CalculaImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
