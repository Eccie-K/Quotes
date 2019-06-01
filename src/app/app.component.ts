import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quotes: string[];

  constructor(){
    this.Quotes = ["The mind is powerful",  "Have a purpose"]
  }
}
