import { Component, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-calcula-imposto',
  templateUrl: './calcula-imposto.component.html',
  styleUrls: ['./calcula-imposto.component.scss', './calcula-imposto.component.desktop.scss']
})

export class CalculaImpostoComponent {

  constructor(private sidebarService: SidebarService, private viewContainerRef: ViewContainerRef, private historyService: HistoryService) { }

  // Verifica a opcao recebida e habilita o campo de taxa de adm
  enableAdmFee(): void {
    (document.getElementById("admFee") as HTMLInputElement).disabled = false;
  }

  disableAdmFee(): void {
    (document.getElementById("admFee") as HTMLInputElement).disabled = true;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  // Verifica qual a opcao selecionada na taxa de adm
  selectAdmFee() {
    const selectedOption = document.querySelector('input[name="optionAdmFee"]:checked') as HTMLInputElement;

    if (selectedOption) {
      const opcao = selectedOption.value;
      return opcao;
    }

    return null;
  }

  selectSimplifiedDiscount() {
    const selectedOption = document.querySelector('input[name="optionSimplifiedDiscount"]:checked') as HTMLInputElement;

    if (selectedOption) {
      const opcao = selectedOption.value;
      return opcao;
    }

    return null;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



  // Calcula qual deducao deve ser feita
  calculaDeducao(valorFinal: number) {

    let tabelaDeAliquota: number[] = [0.075, 0.15, 0.225, 0.275];
    let tabelaDeDeducao: number[] = [169.44, 381.44, 662.77, 896];

    if (valorFinal <= 2259.20) {
      valorFinal = 0.00;
      return valorFinal;

    } else if (valorFinal > 2259.20 && valorFinal <= 2826.65) {
      valorFinal = valorFinal * tabelaDeAliquota[0];
      valorFinal = valorFinal - tabelaDeDeducao[0];
      return valorFinal;

    } else if (valorFinal > 2826.65 && valorFinal <= 3751.05) {

      valorFinal = valorFinal * tabelaDeAliquota[1];
      valorFinal = valorFinal - tabelaDeDeducao[1];
      return valorFinal;

    } else if (valorFinal > 3751.05 && valorFinal <= 4664.68) {

      valorFinal = valorFinal * tabelaDeAliquota[2];
      valorFinal = valorFinal - tabelaDeDeducao[2];
      return valorFinal;

    } else if (valorFinal > 4664.68) {

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

      // Compara os valores da opção e executa o cálculo dependendo da opção selecionada
      if (simpleDiscount == 'true') {
        console.log('SimpleDiscount is true.');

        valorAluguel = valorAluguel - valorDoDescontoSimplificado;

      } else if (simpleDiscount == 'false') {
        console.log('SimpleDiscount is false.');

      } else {
        console.log("Invalid value.");
      }

      // Chama a função selectAdmFee(), retorna se a opcao selecionada é sim ou não, e armazena na const admFee
      const admFee = this.selectAdmFee();

      if (admFee == 'true') {
        console.log('AdmFee is true.');

        valorAluguel = valorAluguel - taxaDeAdm;

      } else if (admFee == 'false') {
        console.log('admFee is false.');

      } else {
        console.log("Invalid value.");
      }

      let finalRent = valorAluguel;
      let valorFinal = this.calculaDeducao(valorAluguel);

      this.saveCalculatorValue(valorFinal)

        // Finaliza o código exibindo o valor do IRRF

        if(valorFinal != 0) {
        document.getElementById("result")!.innerText = valorFinal.toFixed(2);

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
    }
  }



  // Outros métodos --------------->

  openSideBar() {
    this.sidebarService.toggleSideBar(this.viewContainerRef);
  }

  // Guarda informação no localStorage
  saveCalculatorValue(valorFinal: number) {
    this.historyService.addHistory(valorFinal);
  }

}
