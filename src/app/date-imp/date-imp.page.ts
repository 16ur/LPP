import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-date-imp',
  templateUrl: './date-imp.page.html',
  styleUrls: ['./date-imp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DateImpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
