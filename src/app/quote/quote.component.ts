import { Component, OnInit } from '@angular/core';
import {Quote}  from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "Be kind", "Esther", "for you", 0,  0), 
    new Quote(2, "Life is a mystrey", "Dan",  "for you", 0,  0),
    new Quote(3,  "Dare to Be", "Sil",  "for you",  0,  0),


  ]
  constructor() { }

  ngOnInit() {
  }

}
