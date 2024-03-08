import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateImpPage } from './date-imp.page';

describe('DateImpPage', () => {
  let component: DateImpPage;
  let fixture: ComponentFixture<DateImpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DateImpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
