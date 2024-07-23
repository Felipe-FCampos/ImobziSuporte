import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-multasejuros',
  templateUrl: './multasejuros.component.html',
  styleUrls: ['./multasejuros.component.scss', './multasejuros.component.desktop.scss']
})
export class MultasejurosComponent {

    constructor(
      private apiService: ApiService
    ){ }

    finalRentValue!: number;
    dueDate!: number;
    currentDate!: number;
    qtdDias!: number;
    fee!: number;
    rent!: number;

    selectDates(){
      
      let dueDateInput = document.getElementById('dueDate') as HTMLInputElement;
      let currentDateInput = document.getElementById('currentDate') as HTMLInputElement;

      let dueDate = new Date(dueDateInput.value)
      let currentDate = new Date(currentDateInput.value)

      let dueDay = dueDate.getUTCDate();
      let currentDay = currentDate.getUTCDate();

      this.dueDate = dueDay;
      this.currentDate = currentDay

      const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;

      const diferencaEmMilissegundos = dueDate.getTime() - currentDate.getTime()

      this.qtdDias = (Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos)) * -1;
    }

    calcularMulta(){

      let element = document.querySelector('.loading') as HTMLElement;
      element.style.display = 'flex';

      let rent = document.getElementById('rent') as HTMLInputElement;
      this.rent = parseFloat(rent.value);

      let fee = document.getElementById('feePerDay') as HTMLInputElement;
      this.fee = parseFloat(fee.value);
      this.fee = this.fee / 100;

      this.selectDates()

      if(this.rent && this.fee && this.qtdDias){
        this.apiService.sendItemsPenalty(this.rent, this.qtdDias, this.fee).subscribe(items => {
          this.finalRentValue = items.finalRentValue

          let element = document.querySelector('.loading') as HTMLElement;
          element.style.display = 'none';
        })
      } else {

        let element = document.querySelector('.loading') as HTMLElement;
        element.style.display = 'none';

        setTimeout(function(){
          alert('Preencha todos os campos necessários!');
        }, 150)
      }
    }
}
