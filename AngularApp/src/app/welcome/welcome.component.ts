import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  textBoxVal:string = "My Name"; //class attributes
  typedStuffByUser = "";
  buttonName = "update"; //to be used as Property Binding using []
  exampleNGIf = "show";
  names = ["Him","Rich","Andrew","Linh","Ashish"];
  
  message = "I am from Welcom (parent)"; //To be used as input in child component to receive from parent

  secretMessageFromChild = "";
  constructor() { 
    //let myValue:string=""; typesafe
    //myValue = 25;
  }

  ngOnInit(): void {
    console.log("ngOnInit - initializes your component");
  } 

  //below code to read callback event message from child
  receiveMesssage($event){
    debugger;
    this.secretMessageFromChild = $event;
  }

  nameChange(evt){
    let typedValue = evt.target.value;
    this.typedStuffByUser = typedValue;
  }

  updateUserData(evt){
    this.typedStuffByUser = "Updated value on button click"
    this.exampleNGIf = "Hide";
  }

}
