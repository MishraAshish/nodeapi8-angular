import { Component } from '@angular/core';
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {//We should assume each component as a controller
  title = 'AngularApp With Synergisticit';
  textBoxVal:string = "My Name";

  typedStuffByUser = "";

  nameChange(evt){
    let typedValue = evt.target.value;
    this.typedStuffByUser = typedValue;
  }

  updateUserData(){
    this.typedStuffByUser = "Updated value on button click"
  }
}
