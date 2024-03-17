import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Article } from '../article/article.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-favorite-post',
  templateUrl: './favorite-post.page.html',
  styleUrls: ['./favorite-post.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavoritePostPage implements OnInit {
  public favoris: Article[] = [];

  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('slide changed', e);
  }
  ngOnInit() {
    const storedFavoris = localStorage.getItem('favoris');
    if (storedFavoris) {
      this.favoris = JSON.parse(storedFavoris);
    }
  }
}
