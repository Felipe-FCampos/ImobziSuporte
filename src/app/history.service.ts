import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historico: number[] = [];

  constructor() { }

  addHistory(value: number){
    this.historico.push(value);
    this.saveHistory(this.historico);
    console.log('funcionou! Valor:' + value);
  }

  saveHistory(historico: number[]){
    localStorage.setItem('historico', JSON.stringify(this.historico));
  }

  getHistory(): number[] {
    return this.historico.slice();
  }

  saveCalculatorInfo(valorFinal: number){
    localStorage.setItem('finalValue', valorFinal.toString());
    console.log('valor:' + valorFinal);
  }
  
  getCalculatorInfo(): number {
    return parseFloat(localStorage.getItem('finalValue')!);
  }
}
