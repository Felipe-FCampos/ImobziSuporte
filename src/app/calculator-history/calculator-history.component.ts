import { Component } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.scss', './calculator-history.component.desktop.scss']
})
export class CalculatorHistoryComponent {
  
  lastCalc!: number;

  constructor(private historyService: HistoryService){
    this.lastCalc = this.historyService.getLastNumber();
  }
}
