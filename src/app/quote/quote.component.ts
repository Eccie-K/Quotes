import { Component, OnInit } from '@angular/core';
import {Quote}  from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "Kindness is an important virtue",  "we should all have it",  "Ess",  new Date(28,3,2018), 0,  0), 

  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate  = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
        if(toDelete){
          this.quotes.splice(index,1)
      }
        }
      }
      
  constructor() { }

  ngOnInit() {
  }

}
