import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() messageFromParent : string;
  @Output() outputMessage = new EventEmitter<string>();

  messageForPViewChild : string = "This message is from child to support view child";

  constructor() { 
    console.log("ChildComponent-Constructor")
  }

  sendMessageToParent(){
    //debugger;
    this.outputMessage.emit("Message from child (Through Output)")
  }
  
  ngOnInit(): void {
    console.log("ChildComponent- ngOnInit");
    this.callSet()
  }

  callSet(){
    setTimeout(() => {
      this.messageForPViewChild = "Test View Child if child updates async";
    }, 4000);
  } 

}
