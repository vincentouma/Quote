import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Dr .Suess', 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.', new Date(2019,7,10), 'Vincent Ouma',),
    new Quote(2,'Stephene King','Get busy living or get busy dying.', new Date(2019,7,11), 'Vincent Ouma',),
    new Quote(3,'Mark Caine','The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.', new Date(2019,7,12), 'Vincent Ouma',),
    new Quote(4,'John F. Kennedy','Those who dare to fail miserably can achieve greatly.', new Date(2019,7,13), 'Vincent Ouma',),
    new Quote(5,'Marilyn Monroe','I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best', new Date(2019,7,14), 'Vincent Ouma',),


    ];

    addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
