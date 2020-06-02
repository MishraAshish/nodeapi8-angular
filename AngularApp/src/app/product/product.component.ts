import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'Angular Products';
  products = [];


  constructor(private userService: UserService){
    this.title = "Angular Application Title";
  }


  ngOnInit(){
    this.userService.getAllProducts().subscribe(
        (data: any[])=>{
          console.log(data);
          this.products = data;
        },
        (error) => console.log(error),
        () => console.log("Complete")
        ) 
  }

}
