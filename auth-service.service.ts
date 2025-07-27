import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS_DATA } from '../../userData';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLoggedInVar: boolean = false;
  public role:string ="";

  public userId: number = -1;

  constructor(private router: Router) {
    this.isLoggedInVar = !!localStorage.getItem('token');
  }

login(email: string, password: string): boolean {
  const foundUser = USERS_DATA.find(user => user.email === email && user.password === password);

  if (foundUser) {
    this.role = foundUser.role;
    this.userId = foundUser.id;
    this.isLoggedInVar = true;
    return true;
  }

  return false;
}


  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInVar = false;
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  getRole(): string {
    return this.role;
  }

  getUserId(): number {
    return this.userId;
  }
}