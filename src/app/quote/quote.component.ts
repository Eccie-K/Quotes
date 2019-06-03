import { Component, OnInit } from '@angular/core';
import {Quote}  from  '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes  = [
    new Quote(1, "Be kind always"),
    new Quote(2,"Never say never"),
    new Quote(3,"Die trying"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
