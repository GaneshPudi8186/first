import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter';
  Count=0;
  Inc()
  {
    
    this.Count++;
  }
  Dec()
  {
    
    this.Count--;
  }
  Reset()
  {
    
    this.Count=0;
  }
}
