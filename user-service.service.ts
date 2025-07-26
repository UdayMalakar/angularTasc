import { Injectable } from '@angular/core';
import { USERS_DATA } from '../userData';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   private users = USERS_DATA;

  constructor() {}


  getAllUsers() {
    return this.users;
  }

 
  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
