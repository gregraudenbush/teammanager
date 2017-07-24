import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import { AppRoutingModule } from '../../routing.module';
@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  constructor(public _userService: UserService) { 
    // this.retrieveUsers()
  }
users=[]
  ngOnInit() {
    this.retrieveUsers()
  }
retrieveUsers(){
    this._userService.getUsers()
    .then( users => { this.users = users })
    .catch( err => { console.log("error"); + "get" })
  }

  delete(id){
    // this.users.splice(id, 1)
    console.log(this.users[id]._id)
    this._userService.delete(this.users[id])
    .then( user => { console.log("delete succes ") })
    .catch( err => { console.log(err );})
    this.retrieveUsers()
    
  }
}
