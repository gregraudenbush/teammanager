import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs";
@Injectable()
export class UserService {

  constructor(public _http: Http) { 

  }

  getUsers(){
    console.log("USER SERVICE METHOD GET USERS"); 
     return this._http.get('/users')
     .map(data=>data.json())
     .toPromise()
     
  }
  addUser(user) {

      return this._http.post('/add', user)
      .map( data => data.json() )
      .toPromise()     
     
  }
    delete(id){
      console.log("service delete" + id)
      return this._http.post('/delete', id)
      .map( data => data.json() )
      .toPromise() 
    }
}
