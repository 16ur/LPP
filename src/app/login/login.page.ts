import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
    public toastController: ToastController) {
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
        duration: 2000,
        position:"top",
        positionAnchor: "header",
        color: 'success'

      });
      toast.present();
      }


  

  async logFunc() {
    if (this.login == 'classe1' && this.password == 'mdp1') {
      this.navCtrl.navigateForward('article');
      this.toastValid();

    }
    else if (this.login == 'classe2' && this.password == 'mdp2') {
      this.navCtrl.navigateForward('article');
      this.toastValid();
    }

    else if (this.login == 'classe3' && this.password == 'mdp3') {
      this.navCtrl.navigateForward('article');
      this.toastValid();
    }
    else {
      this.toastInvalid();
    }
  
  }
  ngOnInit() {
  }

}
