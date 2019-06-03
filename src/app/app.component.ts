import { Component } from '@angular/core';
import { Quote } from './quote';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes  = [
    new Quote(1, "Be kind always"),
    new Quote(2,"Never say never"),
    new Quote(3,"Die trying"),
  ]

}
  
