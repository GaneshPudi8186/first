import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cart1';
  Recipe:any[]=[];
  c:number=0;
  dt =new Date()
  isDark=false;

  constructor()
  {
    
   fetch('https://fakestoreapi.com/products')
       .then(res => res.json())
      .then((data)=>this.Recipe=data);
      }
   add()
   {
    this.c++;
  }
  change()
  {
    if(this.isDark)
    {
      this.isDark=false;
    }
    else
    {
      this.isDark=true;
    }
  }
 
}
