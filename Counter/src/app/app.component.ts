import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter';
  count = 0;
 isEvenOdd=true
 isZero=true;
  incr()
  {
      this.count++;
      this.isEvenOdd = this.count % 2 == 0;
  }
  decr()
  {
    this.count--;
    if(this.count==0)
    {
      this.isEvenOdd = this.count % 2 == 0;
    }
    else
    {
      this.isEvenOdd = this.count % 2 == 0;
    }  
 
  }
  reset()
  {
    this.isEvenOdd=false;
    this.count = 0;
  }
}
