import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER:string = "http://localhost:9090";

  private productList = new BehaviorSubject<any>([]);//Its data model for product list  
  currentProdList = this.productList.asObservable();//Public data model can be used by any consumer of product service

  constructor(private httpClient:HttpClient) { }
  
  updateproductList(productList: []){
    this.productList.next(productList);
  }

  getAllProducts(){
    return this.httpClient.get(this.REST_API_SERVER+"/api/getProducts");
  }
}
