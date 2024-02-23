import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private hc:HttpClient) {}
  getData()
  {
    console.log("get data started");
    return this.hc.get("http://localhost:3000/Products");
  }
  getCategoryData(str:string)
  {
    return this.hc.get(`https://fakestoreapi.com/products/category/${str}`);
  }
  getCategoryDatas(str:string)
  {
    return this.hc.get(`http://localhost:3000/Products`);
  }
  Deletedata(id:any)
  {
    return this.hc.delete(`http://localhost:3000/Products/${id}`);
   
  }
  updatedata(id:any)
  {
    return this.hc.get(`http://localhost:3000/Products/${id}`)
  }

}
