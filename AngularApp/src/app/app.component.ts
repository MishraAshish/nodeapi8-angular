import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {//We should assume each component as a controller
  title = 'AngularApp With Synergisticit';

  constructor(private router: Router){

  }

  navigateToProduct(){
    this.router.navigateByUrl("/product");
  }
}
