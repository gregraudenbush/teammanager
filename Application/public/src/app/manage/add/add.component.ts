import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../routing.module'; 
import {UserService} from "../../user.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public _userService: UserService) { }
 users=[]
 user = {
   name: null,
   position: null,
   status: {
     game1: "undecided",
     game2: "undecided", 
     game3: "undecided"
   }
 }
  add(){
    
    this._userService.addUser(this.user)
    .then( user => { this.users.push(user) })
    .catch( err => { console.log(err );})
    this.user = {
            name: null,
            position: null,
            status: {
              game1: "undecided",
              game2: "undecided", 
              game3: "undecided"
            }
    }
  }
  ngOnInit() {
  }

}
