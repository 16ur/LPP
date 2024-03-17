import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../AuthService.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Ajout du module FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule], // Ajout du module FormsModule
})
export class LoginPage implements OnInit {
  login: string = '';
  password: string = '';
  rememberMe: boolean = false; // Ajoutez cette variable pour suivre l'état de la case à cocher "Rester connecté"

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    private authService: AuthService
  ) {}

  async toastInvalid() {
    const toast = await this.toastController.create({
      message: 'Login ou mot de passe incorrect',
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async toastValid() {
    const toast = await this.toastController.create({
      message: 'Connexion réussie, bienvenue ' + this.login + ' ! ',
      duration: 1000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }

  async logFunc() {
    const apiClasse1 = `http://www.sebastien-thon.fr/prince/index.php?connexion&login=${this.login}&mdp=${this.password}`;
    const response = await fetch(apiClasse1);
    const data = await response.json();

    if (data.resultat === 'OK') {
      this.authService.login = this.login;
      this.authService.password = this.password;

      if (this.rememberMe) {
        localStorage.setItem('login', this.login);
        localStorage.setItem('password', this.password);
      }

      this.navCtrl.navigateForward('/article');
      this.toastValid();
    } else {
      this.toastInvalid();
    }
  }

  ngOnInit() {
    const storedLogin = localStorage.getItem('login');
    const storedPassword = localStorage.getItem('password');

    if (storedLogin && storedPassword) {
      this.login = storedLogin;
      this.password = storedPassword;
      this.rememberMe = true;
    }
  }
}
