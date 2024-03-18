import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonRefresher } from '@ionic/angular';
import { AuthService } from '../AuthService.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticlePage implements OnInit {
  public myResponse: any = [];
  public filteredArticles: any = [];
  public favoris: Article[] = [];

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const storedLogin = localStorage.getItem('login');
    const storedPassword = localStorage.getItem('password');

    if (storedLogin && storedPassword) {
      this.authService.login = storedLogin;
      this.authService.password = storedPassword;
    }

    try {
      const response = await fetch(
        `http://www.sebastien-thon.fr/prince/index.php?login=${this.authService.login}&mdp=${this.authService.password}`
      );

      if (response.ok) {
        const data = await response.json();
        this.myResponse = data;
        console.log(this.myResponse);
        this.handleInput({ target: { value: '' } });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async runRefresh(event: any) {
    await this.loadData();
    (event.target as HTMLIonRefresherElement).complete();
  }

  swiperSlideChanged(e: any) {
    console.log('slide changed', e);
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    if (Array.isArray(this.myResponse.articles)) {
      this.filteredArticles = this.myResponse.articles.filter((article: any) => {
        return article.titre.toLowerCase().includes(query);
      });
    } else {
      console.error('myResponse.articles is not an array');
    }
  }
  
  

  toggleFavoris(article: Article) {
    article.favoris = !article.favoris;
    if (article.favoris) {
      this.favoris.push(article);
    } else {
      this.favoris = this.favoris.filter((a) => a.id !== article.id);
    }

    localStorage.setItem('favoris', JSON.stringify(this.favoris));
    console.log('favoris', this.favoris);
  }

  isFavoris(article: Article) {
    return this.favoris.some((a) => a.id === article.id);
  }
}
