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





// Versão anterior do cálculo
/*
  // Verifica qual a opcao selecionada na taxa de adm
  selectAdmFee() {
    const selectedOption = document.querySelector('input[name="optionAdmFee"]:checked') as HTMLInputElement;
    const opcao = selectedOption.value;

    return opcao;
  }

  selectSimplifiedDiscount() {
    const selectedOption = document.querySelector('input[name="optionSimplifiedDiscount"]:checked') as HTMLInputElement;
    const opcao = selectedOption.value;

    return opcao;
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // Calcula qual deducao deve ser feita
  calculaDeducao(valorFinal: number) {
    let tabelaDeAliquota: number[] = [0.075, 0.15, 0.225, 0.275];
    let tabelaDeDeducao: number[] = [169.44, 381.44, 662.77, 896];

    if (valorFinal <= 2259.20) {
      valorFinal = 0.00;
      return valorFinal;
    } 
    else if (valorFinal > 2259.20 && valorFinal <= 2826.65) {
      valorFinal = valorFinal * tabelaDeAliquota[0];
      valorFinal = valorFinal - tabelaDeDeducao[0];
      return valorFinal;
    } 
    else if (valorFinal > 2826.65 && valorFinal <= 3751.05) {
      valorFinal = valorFinal * tabelaDeAliquota[1];
      valorFinal = valorFinal - tabelaDeDeducao[1];
      return valorFinal;
    } 
    else if (valorFinal > 3751.05 && valorFinal <= 4664.68) {
      valorFinal = valorFinal * tabelaDeAliquota[2];
      valorFinal = valorFinal - tabelaDeDeducao[2];
      return valorFinal;
    } 
    else if (valorFinal > 4664.68) {
      valorFinal = valorFinal * tabelaDeAliquota[3];
      valorFinal = valorFinal - tabelaDeDeducao[3];
      return valorFinal;
    }

    return 0;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  // Calcula qual o valor do imposto
  calculaImposto(): void {
    // Recebe os valores
    let inputRent = (document.getElementById("rent") as HTMLInputElement).value;
    let inputRecipient = (document.getElementById("recipient") as HTMLInputElement).value;
    let inputAdmFee = (document.getElementById("admFee") as HTMLInputElement).value;

    let valorAluguel = parseFloat(inputRent.replace(",", "."));
    let qtdBenef = parseInt(inputRecipient);
    let taxaDeAdm = parseFloat(inputAdmFee);

    let initialRent = valorAluguel;

    let valorDoDescontoSimplificado = 564.80;

    // Verifica se o valor inserido é valido e executa todo o código restante
    if (!isNaN(valorAluguel)) {

      // Verifica a quantidade de beneficiarios e executa a divisao
      if (qtdBenef >= 2) {
        valorAluguel = valorAluguel / qtdBenef;
      }

      // Chama a função selectSimplifiedDiscount(), retorna se a opcao selecionada é sim ou não, e armazena na const simpleDiscount
      const simpleDiscount = this.selectSimplifiedDiscount();
      this.saveSimpleDiscount(simpleDiscount)
      console.log(simpleDiscount);

      // Compara os valores da opção e executa o cálculo dependendo da opção selecionada
      if (simpleDiscount == 'Sim') {
        console.log('SimpleDiscount is true.');

        let valorAluguelSalvo = valorAluguel;
        valorAluguel = valorAluguelSalvo - valorDoDescontoSimplificado;

      } else if (simpleDiscount == 'Não') {
        console.log('SimpleDiscount is false.');

      } else {
        console.log("Invalid value.");
      }

      // Chama a função selectAdmFee(), retorna se a opcao selecionada é sim ou não, e armazena na const admFee
      const admFee = this.selectAdmFee();
      this.saveAdmFeeDeduct(admFee);

      if (admFee == 'Sim') {
        console.log('AdmFee is true.');

        valorAluguel = valorAluguel - taxaDeAdm;

      } else if (admFee == 'Não') {
        console.log('admFee is false.');

      } else {
        console.log("Invalid value.");
      }

      let finalRent = valorAluguel;
      let valorFinal = this.calculaDeducao(valorAluguel);

      this.saveCalculatorValue(valorFinal);
      this.getLastNumber(valorFinal);
      this.saveAdmFee(taxaDeAdm);

        // Finaliza o código exibindo o valor do IRRF

        if(valorFinal != 0) {
        document.getElementById("result")!.innerText = valorFinal.toFixed(2).replace(".",",");

        console.log([
          {
            "Desconto do IRRF": valorFinal.toFixed(2),
            "Aluguel Inicial": initialRent.toFixed(2),
            "Aluguel final": finalRent.toFixed(2),
            "Beneficiários": qtdBenef,
            "Desconto Simplificado": simpleDiscount,
            "Taxa de administração": admFee,
          }
        ])
      } else {
        document.getElementById("result")!.innerText = 'Isento!';

        console.log([
          {
            "Desconto do IRRF": valorFinal.toFixed(2),
            "Aluguel inicial": initialRent.toFixed(2),
            "Aluguel final": finalRent.toFixed(2),
            "Beneficiários": qtdBenef,
            "Desconto Simplificado": simpleDiscount,
            "Taxa de administração": admFee,
          }
        ])

      }
    } else {
      console.log("Invalid value!");
      alert("É necessário preencher todos os campos!");
    }
  }


*/
