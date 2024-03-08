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
    const apiClasse1 = `http://www.sebastien-thon.fr/prince/index.php?connexion&login=${this.login}&mdp=${this.password}`;
    const response = await fetch(apiClasse1);
    const data = await response.json();
    console.log(data);

    if (data.resultat === "OK") {
      this.toastValid();
      this.navCtrl.navigateForward('/article');
    } else {
      this.toastInvalid();
    }
  }
  ngOnInit() {
  }

}
