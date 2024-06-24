import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-irrf-table',
  templateUrl: './irrf-table.component.html',
  styleUrls: ['./irrf-table.component.scss', './irrf-table.component.desktop.scss']
})
export class IrrfTableComponent {
  
  irTable: any[] = [
    {
      id: 1,
      firstValue: "0,00",
      secondValue: "2259,20",
      aliquota: "0,00",
      deduct: "0,00",
    },
    {
      id: 2,
      firstValue: "2.259,21",
      secondValue: "2.826,65",
      aliquota: "7,50",
      deduct: "169,44",
    },
    {
      id: 3,
      firstValue: "2.826,66",
      secondValue: "3.751,05",
      aliquota: "15,00",
      deduct: "381,44",
    },
    {
      id: 4,
      firstValue: "3.751,06",
      secondValue: "4.664,68",
      aliquota: "22,50",
      deduct: "662,77",
    },
    {
      id: 5,
      firstValue: "0",
      secondValue: "4.664,68",
      aliquota: "27,50",
      deduct: "896,00",
    },
  ];


  changeColorTable(){

  }

}


