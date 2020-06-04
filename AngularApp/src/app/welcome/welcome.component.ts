import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  textBoxVal:string = "My Name"; //class attributes
  typedStuffByUser = "";
  buttonName = "update"; //to be used as Property Binding using []
  exampleNGIf = "show";
  names = ["Him","Rich","Andrew","Linh","Ashish"];
  
  message = "I am from Welcom (parent)"; //To be used as input in child component to receive from parent
  secretMessageFromChild = "";

  childsMsgAsViewChild = "";

  @ViewChild(ChildComponent) child;
  
  constructor(private cdr : ChangeDetectorRef) { 
    //let myValue:string=""; typesafe
    //myValue = 25;
    console.log("Welcome-Constructor")
  }

  ngAfterViewInit(){ //This needs to be implemented for access child components properties
    console.log("WelcomeComponent.ngAfterViewInit()")
    this.childsMsgAsViewChild = this.child.messageForPViewChild;
  }

  ngAfterViewChecked(){ //Helps re-rendering of parent component once recieved content as view child
    //your code to update the model
    this.cdr.detectChanges();
  }

  // ngOnInit(){
  //   console.log("ngOnInit - initializes your component - Welcome");
  // } 

  //below code to read callback event message from child
  receiveMesssage($event){
    //debugger;
    this.secretMessageFromChild = $event;
    
    this.childsMsgAsViewChild = this.child.messageForPViewChild; //Re-assigned value updated in view child
    this.cdr.detectChanges(); //change detector for view child
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