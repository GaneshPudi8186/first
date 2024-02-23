import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './environtment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { 
    

  }
  GetData(limit?:number)
  {
    if(limit)
    return this.hc.get(`${API_URL}?limit=${limit}`);
    else
    return this.hc.get(`$API_URL`);
  }
  GetAllProducts()
  {
    return this.hc.get(`${API_URL}`);
  }
}
