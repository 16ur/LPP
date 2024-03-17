import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonRefresher } from '@ionic/angular';
import { AuthService } from '../AuthService.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
    const query = event.target.value.toLowerCase().trim();
    this.filteredArticles = this.myResponse.filter((article: any) => {
      return (
        article.titre.toLowerCase().includes(query) ||
        article.contenu.toLowerCase().includes(query)
      );
    });
  }
}
