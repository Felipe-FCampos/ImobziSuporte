import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  name!: string;

  private apiUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  sendName(name: string){
    const body = {
      name
    }

    return this.http.post<ApiResponse>(`${this.apiUrl}name`, body);
  }

  sendItems(
    rent: number, 
    recipient: number, 
    opcaoSimpleDiscount: string,
    opcaoAdmFee: string,
    valueAdmFee: number,
  ){
    const body = {
      rent, recipient, opcaoSimpleDiscount, opcaoAdmFee, valueAdmFee
    }

    return this.http.post<ApiResponse>(`${this.apiUrl}somar`, body);
  }

  getNames(){
    return this.http.get<ApiResponse>(`${this.apiUrl}nomes`);
  }

  getMessage(){
    return this.http.get<ApiResponse>(`${this.apiUrl}`);
  }
}
