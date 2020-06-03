import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent : string;

  @Output() outputMessage = new EventEmitter<string>();

  constructor() { }

  sendMessageToParent(){
    debugger;
    this.outputMessage.emit("Message from child (Through Output)")
  }
  
  ngOnInit(): void {

  }

}
