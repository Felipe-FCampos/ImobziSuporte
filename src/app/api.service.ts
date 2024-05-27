import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  num1!: number;
  num2!: number;

  name!: string;

  private apiUrl = 'https://imobzisuporteapi.onrender.com/'

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
