import { Component } from '@angular/core';
import { AppRoutingModule } from './routing.module'; 

import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _userService: UserService){

  }

  getUsers(){
    console.log("GETTING Users");
    this._userService.getUsers();
  }
}
