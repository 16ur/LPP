import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  logOutOutline,
  imageOutline,
  imageSharp,
  libraryOutline,
  librarySharp,
  logOutSharp,
  calendarOutline,
  calendarSharp,
  mailOpenOutline,
  mailOpenSharp,
  accessibility,
  accessibilityOutline,
  accessibilitySharp,
} from 'ionicons/icons';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Articles', url: '/article', icon: 'library' },
    {
      title: 'Articles favoris',
      url: '/favorite-post',
      icon: 'heart',
    },
    { title: "Galeries d'images", url: '/gal-images', icon: 'image' },
    { title: 'Dates Importantes', url: '/date-imp', icon: 'calendar' },
    {
      title: 'Informations de contact',
      url: '/info-contact',
      icon: 'mail-open',
    },
    {
      title: 'Tutoriel',
      url: '/tutorial-page',
      icon: 'accessibility',
    }
  ];

  public logoutPage = [
    { title: 'Déconnexion', url: '/login', icon: 'log-out' }
  ];
  constructor(private navCtrl: NavController) {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
      logOutOutline,
      logOutSharp,
      imageOutline,
      imageSharp,
      libraryOutline,
      librarySharp,
      calendarOutline,
      calendarSharp,
      mailOpenOutline,
      mailOpenSharp,
      accessibility,
      accessibilityOutline,
      accessibilitySharp,
    });
  }

  ngOnInit() {
    const seenTutorial = localStorage.getItem('seenTutorial');
    if (!seenTutorial) {
      this.navCtrl.navigateRoot('/tutorial-page');
    }
  }
}
