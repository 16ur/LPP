import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalImagesPage } from './gal-images.page';

describe('GalImagesPage', () => {
  let component: GalImagesPage;
  let fixture: ComponentFixture<GalImagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
