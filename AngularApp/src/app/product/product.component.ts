import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  title = 'Angular Products';
  products = [];


  constructor(private productService: ProductService){
    this.title = "Angular Application Title";
  }

  callSet(){
    setTimeout(() => {
      this.title = this.title + "Test";
    }, 2000);
  }  

  ngOnInit(){
    this.callSet();
    this.productService.getAllProducts().subscribe(
        (data: any[])=>{ //success : callback of observable object
          console.log(data);
          this.products = data;
        },
        (error) => console.log(error), //error: callbak of observable object
        () => console.log("Complete")
        ) 
  }
}
