import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.page.html',
  styleUrls: ['./tutorial-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TutorialPagePage implements OnInit {
  constructor(private router: Router) {}

  onDiveInto() {
    this.router.navigateByUrl('/article');
  }

  ngOnInit() {}
}
