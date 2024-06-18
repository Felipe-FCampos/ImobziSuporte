import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diasprop',
  templateUrl: './diasprop.component.html',
  styleUrls: ['../app.component.scss', './diasprop.component.scss', './diasprop.component.desktop.scss']
})
export class DiaspropComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  resultPropDays!: number;
  rentPropDay!: number;
  propDay!: number;
  dueDay!: number;


  ngOnInit(): void {
    this.gerarOpcoesSelect();
  }

  selectedDay() {
    const dateInput = document.getElementById('dateInput') as HTMLInputElement;

    const selected = new Date(dateInput.value)
    const day = selected.getUTCDate();

    let verifyDate = document.getElementById('dateInput') as HTMLInputElement;

    if (verifyDate.value) {

      let element = document.getElementById('dateInput') as HTMLElement;
      element.style.border = 'none';

      return day
    } else {
      let element = document.getElementById('dateInput') as HTMLElement;
      element.style.border = '0.1px solid red';

      return undefined
    }
  }

  calcularPropDays() {

    let element = document.querySelector('.loading') as HTMLElement;
    element.style.display = 'flex';

    let day = this.selectedDay();
    let rent = document.getElementById('rentPropDay') as HTMLInputElement;
    let dueDate = document.getElementById('dynamicSelect') as HTMLSelectElement;
    console.log('Data de vencimento:' + dueDate.value)
    console.log('Dia selecionado:' + day)

    this.propDay = day || 0;
    this.dueDay = parseFloat(dueDate.value);
    this.rentPropDay = parseFloat(rent.value);

    if(day && rent && dueDate){
    this.apiService.sendItemsDiasProp(this.rentPropDay, this.propDay, this.dueDay).subscribe(items => {
      this.resultPropDays = items.resultPropDays;
      console.log(this.resultPropDays)

      let element_rent = document.getElementById('rentPropDay') as HTMLElement;
      element_rent.style.border = 'none';

      let element_select = document.getElementById('dynamicSelect') as HTMLElement;
      element_select.style.border = 'none';

      let element = document.querySelector('.loading') as HTMLElement;
      element.style.display = 'none';
    })
    } else {
      alert('Preencha todos os campos necessários!');

      let element_rent = document.getElementById('rentPropDay') as HTMLElement;
      element_rent.style.border = '0.1px solid red';

      let element_select = document.getElementById('dynamicSelect') as HTMLElement;
      element_select.style.border = '0.1px solid red';

      let element = document.querySelector('.loading') as HTMLElement;
      element.style.display = 'none';
    }
  }

  gerarOpcoesSelect() {
    const select = document.getElementById('dynamicSelect') as HTMLSelectElement;


      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Selecione o dia';
      defaultOption.selected = true;
      defaultOption.disabled = true;
      select.appendChild(defaultOption);

      for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');

        option.value = `${i}`;
        option.textContent = `${i}`;

        select.appendChild(option)
      }
  }
}
