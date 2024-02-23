import { Component } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any;
  isDark=false;
  change()
  {
    if(this.isDark)
    {
      this.isDark=false;
    }
    else{
      this.isDark=true;
    }
  }
  constructor(private fs:FetchdataService)
  {
    this.fs.getData().subscribe((data)=>{
    this.products=data;
    console.log(this.products)
    })

  }
  fun(e:any)
  {
    console.log(e.target.textContent)
    console.log(this.products)
    this.fs.getCategoryData(e.target.textContent).subscribe((data)=>this.products=data)
  }
  funs(e:any)
  {
    console.log(e.target.textContent)
    console.log(this.products)
    this.fs.getCategoryDatas(e.target.textContent).subscribe((data)=>this.products=data)
  }
  del(id:any)
  {
  this.fs.Deletedata(id).subscribe((data)=>this.products=data)
  window.location.reload();
  }
  Update(e:any)
  {
    this.fs.updatedata(e.target.textContent).subscribe((data)=>this.products=data)

  }

}
