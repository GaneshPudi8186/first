import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 colors=""
 btn:any
 fun(e.Event)
 {
  this.btn=e.target as HTMLButtonElement
  this.colors=this.btn.value;
 }

}
