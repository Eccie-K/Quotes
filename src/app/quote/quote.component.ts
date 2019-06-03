import { Component, OnInit } from '@angular/core';
import {Quote}  from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "Be kind", "Esther", "for you",  new Date(28,3,2018), 0,  0), 
    new Quote(2, "Life is a mystrey", "Dan",  "for you",  new Date(28,3,2018),  0,  0),
    new Quote(3,  "Dare to Be", "Sil",  "for you",  new Date(28,3,2018),  0,  0),


  ]

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
        if(toDelete){
          this.quotes.splice(index,1)
      }
        }
      }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
