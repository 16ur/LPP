import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.page.html',
  styleUrls: ['./info-contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InfoContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
