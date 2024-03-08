import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gal-images',
  templateUrl: './gal-images.page.html',
  styleUrls: ['./gal-images.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GalImagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
