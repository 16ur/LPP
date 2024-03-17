import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritePostPage } from './favorite-post.page';

describe('FavoritePostPage', () => {
  let component: FavoritePostPage;
  let fixture: ComponentFixture<FavoritePostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavoritePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
