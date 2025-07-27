// src/app/post-service.service.ts

import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private userService: UserServiceService) {}

  // ✅ 1. Get All Posts from All Users
  getAllPosts() {
    const users = this.userService.getAllUsers();
    const allPosts = users.flatMap(user =>
      user.posts.map(post => ({
        ...post,
        userId: user.id,
        username: user.username
      }))
    );
    return allPosts;
  }

  // ✅ 2. Get Post By Index (optional filtering)
  getPostByTitle(title:String) {
    const users = this.userService.getAllUsers();
    for (let user of users) {
      const post = user.posts.find(p => p.title === title);
      if (post) {
        return {
          ...post,
          userId: user.id,
          username: user.username
        };
      }
    }
    return null;
  }

  // src/app/post-service.service.ts

addPostToUser(userId: number, title: string, description: string): boolean {
  const users = this.userService.getAllUsers();
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    const newPost = { title, description };
    users[userIndex].posts.push(newPost);
    this.userService.updateUsers(users); // ✅ make sure userService can update users
    return true;
  }

  return false; // user not found
}

}
