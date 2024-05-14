import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  
  historico: number[] = [];
  lastValue!: number;

  constructor() { }

  saveLastNumber(lastNumber: number){
    localStorage.setItem('lastNumber', lastNumber.toString());
  }

  getLastNumber(): number {
    let value = localStorage.getItem('lastNumber');
    this.lastValue = parseFloat(value || '');
    return this.lastValue;
  }

  addHistory(value: number){
    this.historico[this.historico.length] = value;
    this.saveHistory(this.historico);
  }

  saveHistory(historico: number[]){
    localStorage.setItem('historico', JSON.stringify(historico));
  }

  getHistory(): number[] {
    let novoHistorico = localStorage.getItem('historico');    
    this.historico = JSON.parse(novoHistorico || '[]');
    return this.historico;
  }

  saveCalculatorInfo(valorFinal: number){
    localStorage.setItem('finalValue', valorFinal.toString());
    console.log('valor:' + valorFinal);
  }
  
  getCalculatorInfo(): number {
    return parseFloat(localStorage.getItem('finalValue')!);
  }
}
