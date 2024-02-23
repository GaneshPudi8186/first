import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topProducts:any[]=[];
  count=0;
constructor(private ds:DataService)
{
  this.ds.GetData(10).subscribe((data:any)=>this.topProducts=data.products);
}
Add()
{
  this.count++;
}
Dec()
{
  if(this.count>0)
  {
    this.count--;
  }
  else
  {
    this.count=0;
  }
  
}
}
