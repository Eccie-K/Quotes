import { Component } from '@angular/core';
import { Quote } from './quote';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, "Be kind", "Esther", "for you",  new Date(28,3,2018), 0,  0), 
    new Quote(2, "Life is a mystrey", "Dan",  "for you",  new Date(28,3,2018),  0,  0),
    new Quote(3,  "Dare to Be", "Sil",  "for you",  new Date(28,3,2018),  0,  0),




  ]
  
}

  
