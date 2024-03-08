import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoContactPage } from './info-contact.page';

describe('InfoContactPage', () => {
  let component: InfoContactPage;
  let fixture: ComponentFixture<InfoContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
