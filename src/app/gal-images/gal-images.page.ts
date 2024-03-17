import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../AuthService.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-gal-images',
  templateUrl: './gal-images.page.html',
  styleUrls: ['./gal-images.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalImagesPage implements OnInit {
  public myResponse: any = [];

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.loadData(); // Charger les données initiales lors du chargement de la page
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
}
