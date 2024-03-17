import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialPagePage } from './tutorial-page.page';

describe('TutorialPagePage', () => {
  let component: TutorialPagePage;
  let fixture: ComponentFixture<TutorialPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorialPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
