import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../AuthService.page';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ArticlePage implements OnInit {

  public myResponse:any = [];

  constructor(public authService: AuthService) {
  }

  ngOnInit() {

    const storedLogin = localStorage.getItem('login');
    const storedPassword = localStorage.getItem('password');

    if (storedLogin && storedPassword) {
      this.authService.login = storedLogin;
      this.authService.password = storedPassword;
    }

    fetch(`http://www.sebastien-thon.fr/prince/index.php?login=${this.authService.login}&mdp=${this.authService.password}`)
      .then(async (response) => {

        if (response.ok) {
          const data = await response.json();
          this.myResponse = data;
          console.log(this.myResponse);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

}
