import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName_: string | null = null;

  // private apiUrl = 'http://127.0.0.1:8000/'
  private apiUrl = 'https://imobzisuporteapi.onrender.com/'

  constructor(private http: HttpClient) { }

  setUserName(userName: string){
    this.userName_ = userName;
    localStorage.setItem('userName', userName)
  }

  getUserName(): string | null {
    return this.userName_ = localStorage.getItem('userName');
  }

  loginService(
    email: string,
    password: string
  ): Observable<any>{
    const payload = {
      email, password
    }

    return this.http.post<any>(`${this.apiUrl}login`, payload);
  }

  addUser(
    uid: string,
    userName: string,
    email: string,
    password: string,
  ): Observable<any>{

    const body = {
      uid, userName, email, password
    }

    return this.http.post<any>(`${this.apiUrl}register`, body)
  }
}
