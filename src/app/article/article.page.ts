import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ArticlePage implements OnInit {

  public myResponse:any = [];

  constructor() {
    fetch(`http://www.sebastien-thon.fr/prince/index.php?login=classe1&mdp=mdp1`).then(async (response) => {
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


  ngOnInit() {
  }

}
