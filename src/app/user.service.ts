import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName: string | null = null;

  constructor() { }

  setUserName(userName: string){
    this.userName = userName;
    localStorage.setItem('userName', userName)
  }

  getUserName(): string | null {
    return this.userName = localStorage.getItem('userName');
  }
}
