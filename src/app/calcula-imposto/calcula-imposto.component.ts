import { Component, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { HistoryService } from '../history.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calcula-imposto',
  templateUrl: './calcula-imposto.component.html',
  styleUrls: ['./calcula-imposto.component.scss', './calcula-imposto.component.desktop.scss']
})

export class CalculaImpostoComponent {

  valueAdmFee!: number;
  opcaoAdmFee!: string;
  opcao!: string;
  add!: string;
  rent!: number;
  recipient!: number;
  resultado!: number;

  constructor(
    private sidebarService: SidebarService, 
    private viewContainerRef: ViewContainerRef, 
    private historyService: HistoryService,
    private apiService: ApiService
  ) { }

  // Verifica a opcao recebida e habilita o campo de taxa de adm
  enableAdmFee(): void {
    (document.getElementById("admFee") as HTMLInputElement).disabled = false;
  }

  disableAdmFee(): void {
    (document.getElementById("admFee") as HTMLInputElement).disabled = true;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // Outros métodos --------------->

  openSideBar() {
    this.sidebarService.toggleSideBar(this.viewContainerRef);
  }

  // Guarda informação no localStorage
  saveCalculatorValue(valorFinal: number) {
    this.historyService.addHistory(valorFinal);
  }

  getLastNumber(lastNumber: number){
    this.historyService.saveLastNumber(lastNumber);
  }

  saveSimpleDiscount(opcao: string){
    this.historyService.addHistorySimpleDicount(opcao);
  }

  saveAdmFeeDeduct(opcao: string){
    this.historyService.addHistoryAdmFee(opcao);
  }

  saveAdmFee(value: number){
    this.historyService.addAdmFee(value);
  }


  // Nova versão integrada à API

  somar(){

    let element = document.querySelector('.loading') as HTMLElement;
    element.style.display = 'flex';

    let inputRent = document.getElementById("rent") as HTMLInputElement;
    let inputRecipient = document.getElementById("recipient") as HTMLInputElement;
    let inputAdmFee = document.getElementById("admFee") as HTMLInputElement;

    let opcaoSimpleDiscount = document.querySelector('input[name="optionSimplifiedDiscount"]:checked') as HTMLInputElement;
    let opcaoAdmFee = document.querySelector('input[name="optionAdmFee"]:checked') as HTMLInputElement;

    this.rent = parseFloat(inputRent.value);
    this.recipient = parseFloat(inputRecipient.value);
    this.opcao = opcaoSimpleDiscount.value;
    this.opcaoAdmFee = opcaoAdmFee.value;
    this.valueAdmFee = parseFloat(inputAdmFee.value);
    
    this.apiService.sendItems(this.rent, this.recipient, this.opcao, this.opcaoAdmFee, this.valueAdmFee).subscribe(items => {
      this.resultado = items.resultado
      this.opcao = this.add
      this.opcaoAdmFee = this.add
      console.log(this.resultado)

      this.saveCalculatorValue(this.resultado);

      let element = document.querySelector('.loading') as HTMLElement;
      element.style.display = 'none';
    })
    console.log(this.resultado)
  }
}





// Versão anterior do cálculo em ./antigoCalculo.txt
