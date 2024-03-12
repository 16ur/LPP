import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from "../AuthService.page"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  
  login: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, 
    public toastController: ToastController, private authService: AuthService) {
  }

  async toastInvalid() {
    const toast = await this.toastController.create({
      message: 'Login ou mot de passe incorrect',
      duration: 2000,
      position: 'top',
      positionAnchor: "headerAnchor",
      color: 'danger'
    });
    toast.present();
    }

    async toastValid() {
      const toast = await this.toastController.create({
        message: 'Connexion réussie, bienvenue ' + this.login + ' ! ',
        duration: 1000,
        position:"top",
        positionAnchor: "header",
        color: 'success'

      });
      toast.present();
      }


  

  async logFunc() { // test login and password

    
      const apiClasse1 = `http://www.sebastien-thon.fr/prince/index.php?connexion&login=${this.login}&mdp=${this.password}`;
      const response = await fetch(apiClasse1);
      const data = await response.json();
    
      if (data.resultat === 'OK') {
        this.authService.login = this.login;
        this.authService.password = this.password;
        
        localStorage.setItem('login', this.login);
        localStorage.setItem('password', this.password);
        this.navCtrl.navigateForward('/article');
        this.toastValid();
      } else {
        this.toastInvalid();
      }
    }
    
    
  ngOnInit() {
  }

}
