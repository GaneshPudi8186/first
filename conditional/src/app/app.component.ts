import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num=0;
  isLogin=false;
  login()
  {
    this.isLogin=true;
  }
  click()
  {

  }
  

}
