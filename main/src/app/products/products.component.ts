import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products:any[]=[];
  count:number=0;
constructor(private ds:DataService)
{
  this.ds.GetAllProducts().subscribe((data:any)=>this.Products=data.products);
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
