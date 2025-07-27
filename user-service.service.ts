import { Injectable } from '@angular/core';
import { USERS_DATA } from '../userData';

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  dateOfBirth: string;
  address: string;
  email: string;
  phone: string;
  profileImage: string;
  posts: {
    title: string;
    description: string;
  }[];
}

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

removeUser(id: number) {
  this.users = this.users.filter(user => user.id !== id);
  return this.users;
}

  addUser(user: User) {
    const nextId = Math.max(...this.users.map(u => u.id)) + 1;
    this.users.push({ ...user, id: nextId });
  }
  updateUsers(users: User[]): void {
  this.users = users;
}
}