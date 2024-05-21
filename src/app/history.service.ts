import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  lastValue!: number;
  admFee!: number;

  historico: number[] = [];
  historicoDescontoSimplificado: string[] = [];
  historicoDeducaoTaxa: string[] = [];
  historicoAdmFee: number[] = [];

  constructor() { }

  saveLastNumber(lastNumber: number){
    localStorage.setItem('lastNumber', lastNumber.toString());
  }

  getLastNumber(): number {
    let value = localStorage.getItem('lastNumber');
    this.lastValue = parseFloat(value || '');
    this.lastValue.toFixed(2);
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

  addHistorySimpleDicount(opcao: string){
    this.historicoDescontoSimplificado[this.historicoDescontoSimplificado.length] = opcao;
    this.saveHistorySimpleDiscount(this.historicoDescontoSimplificado);
    console.log(this.historicoDescontoSimplificado);
  }

  saveHistorySimpleDiscount(simpleDiscountHistory: string[]){
    localStorage.setItem('simpleDiscountHistory', JSON.stringify(simpleDiscountHistory));
  }

  getHistorySimpleDicount(): string[]{
    let newSimpleDiscount = localStorage.getItem('simpleDiscountHistory');
    this.historicoDescontoSimplificado = JSON.parse(newSimpleDiscount || '[]');
    console.log(this.historicoDescontoSimplificado);
    return this.historicoDescontoSimplificado;
  }

  addHistoryAdmFee(opcao: string){
    this.historicoDeducaoTaxa[this.historicoDeducaoTaxa.length] = opcao;
    this.saveHistoryAdmFee(this.historicoDeducaoTaxa);
    console.log(this.historicoDeducaoTaxa);
  }

  saveHistoryAdmFee(admFeeHistory: string[]){
    localStorage.setItem('AdmFeeHistory', JSON.stringify(admFeeHistory));
  }

  getHistoryAdmFee(){
    let newAdmFeeDeduct = localStorage.getItem('AdmFeeHistory');
    this.historicoDeducaoTaxa = JSON.parse(newAdmFeeDeduct || '[]');
    console.log(this.historicoDeducaoTaxa);
    return this.historicoDeducaoTaxa;
  }

  addAdmFee(value: number){
    this.historicoAdmFee[this.historicoAdmFee.length] = value;
    this.saveAdmFee(this.historicoAdmFee);
  }

  saveAdmFee(admFee: number[]){
    localStorage.setItem('admFee', JSON.stringify(admFee));
  }

  getAdmFee(): number[] {
    let newAdmFee = localStorage.getItem('admFee');    
    this.historicoAdmFee = JSON.parse(newAdmFee || '[]');
    return this.historicoAdmFee;
  }

  saveCalculatorInfo(valorFinal: number){
    localStorage.setItem('finalValue', valorFinal.toString());
    console.log('valor:' + valorFinal);
  }
  
  getCalculatorInfo(): number {
    return parseFloat(localStorage.getItem('finalValue')!);
  }
}
