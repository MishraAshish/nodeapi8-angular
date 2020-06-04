import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER:string = "http://localhost:9090";

  constructor(private httpClient:HttpClient) { }
  
  getAllProducts(){
    return this.httpClient.get(this.REST_API_SERVER+"/api/getProducts");
  }
}
