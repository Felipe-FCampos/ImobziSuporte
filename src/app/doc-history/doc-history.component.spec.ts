import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHistoryComponent } from './doc-history.component';

describe('DocHistoryComponent', () => {
  let component: DocHistoryComponent;
  let fixture: ComponentFixture<DocHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocHistoryComponent]
    });
    fixture = TestBed.createComponent(DocHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
