import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  title = 'Angular Products';
  products = [];
  userInfo = {
    userName:""
  };

  constructor(private productService: ProductService, private userService: UserService){
    this.title = "Angular Application Title";
    this.userService.currentUserInfo.subscribe((data)=>{
        //debugger;
        console.log("User Data ",data);
        this.userInfo = data;
    })
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
