import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['../app.component.scss',
    './history.component.scss', 
  '../calcula-imposto/calcula-imposto.component.scss', 
  '../history/history.component.desktop.scss', 
  './history.popup.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit { 
  @ViewChildren('checkbox') checkboxes!: QueryList<any>;

  selectedItems: boolean[] = [];
  selectLastNumber: boolean = false;
  isChecked: boolean = false;
  verifying: boolean = false;

  historico: number[] = [];
  valorFinal!: number;

  simplifiedDiscountHistory: string[] = [];
  admFeeDeductHistory: string[] = [];
  admFeeHistory: number[] = [];
  admFeeTax!: number;

  isMarked = false;
  isNotMarked = true;

  constructor(private sideBarService: SidebarService, private viewContentRef: ViewContainerRef, private historyService: HistoryService) { 
    
  }
  ngAfterViewInit() {
    this.checkboxes.forEach((checkbox, index) => {
      checkbox.nativeElement.addEventListener('change', () => this.selecionado(index));
    });
  }

  ngOnInit(){
    this.verifyHistory();
    this.historico = this.historyService.getHistory();
    this.valorFinal = this.historyService.getLastNumber();
    this.simplifiedDiscountHistory = this.historyService.getHistorySimpleDicount();
    this.admFeeDeductHistory = this.historyService.getHistoryAdmFee();
    this.admFeeHistory = this.historyService.getAdmFee();
    this.changeHistory();
    this.initializeSelectedItems();
    console.log(this.admFeeHistory);
  }

  selecionado(index: number): void {
    this.selectedItems[index] = !this.selectedItems[index];
    console.log(this.selectedItems[index])
  }

  lastNumberSelected(){
    this.selectLastNumber = !this.selectLastNumber;
    console.log(this.selectLastNumber)
  }

  deleteLastNumber(){
    if(this.selectLastNumber == true){
      localStorage.removeItem('lastNumber');

      this.verifying = !this.verifying;
      localStorage.setItem('verify', JSON.stringify(this.verifying));

      console.log(localStorage.getItem('verify') + ' deleteLastNumber')

    }
  }

  excluirItems(){
    this.historico = this.historico.filter((item, index) => !this.selectedItems[index]);
    this.selectedItems = this.selectedItems.filter((item, index) => !item);

    let history = JSON.stringify(this.historico);
    localStorage.setItem('historico', history);

    this.deleteLastNumber();
    
    console.log(localStorage.getItem('verify') + 'excluirItens')

    // location.reload();
  }

  reverseHistory(){
    const combinedHistory = [];
    for(let i = 0; i < this.historico.length; i++){
      combinedHistory.push({  
        value: this.historico[i],
        simpleDiscount: this.simplifiedDiscountHistory[i],
        admFeeDeduct: this.admFeeDeductHistory[i], 
        admFee: this.admFeeHistory[i] 
      });
    }
    console.log('Combined History:', combinedHistory);

    return combinedHistory.slice().reverse();
  }

  deleteAllHistory(){
    localStorage.clear();
    location.reload();
  }

  changeHistory(){
    let verify = JSON.parse(localStorage.getItem('verify') || '[]');

    if(verify == true){
      let element = document.querySelector(".lastNumber") as HTMLElement;
      element.style.display = 'none';
    }

    let historico: number[] = [];
    historico = JSON.parse(localStorage.getItem('historico') || '[]');

    if(historico.length <= 0){

    let element_no_content = document.querySelector(".noContent") as HTMLElement;
    element_no_content.style.display = 'flex';

    let element_history_container = document.querySelector(".history_container") as HTMLElement;
    element_history_container.style.display = 'none';

    let elementHistoryTitle = document.querySelector(".current") as HTMLElement;
    elementHistoryTitle.style.display = 'none'; 

    } else {
      console.log('Errorrr');
    }
  }

  verifyHistory(){
    let verifyValue = JSON.parse(localStorage.getItem('lastNumber') || 'null');

    console.log(localStorage.getItem('lastNumber') + 'wrongg')

    if(verifyValue > 0){
      localStorage.removeItem('verify');
      console.log('works')
    } else {
      console.log('error')
    }
  }

  openSideBar(){
    this.sideBarService.toggleSideBar(this.viewContentRef);
  }

  isNumber(value: any): boolean {
    return !isNaN(value);
  }

  initializeSelectedItems(): void {
    this.selectedItems = new Array(this.historico.length).fill(false);
    this.selectLastNumber = false;
  }

  selecionarTodos(){
    this.isMarked = !this.isMarked;
    this.selectLastNumber = !this.selectLastNumber;
    this.isChecked = !this.isChecked;
    this.selectedItems.fill(true);

    let element = document.querySelector('#selectAllButton') as HTMLElement;
    element.style.display = 'none';

    let element_marked = document.querySelector('#notSelectAllButton') as HTMLElement;
    element_marked.style.display = 'flex';
  }

  deselecionarTodos() {
    this.isMarked = false;
    this.selectLastNumber = false;
    this.isChecked = !this.isChecked;
    this.selectedItems.fill(false);


    let element = document.querySelector('#selectAllButton') as HTMLElement;
    element.style.display = 'flex';

    let element_marked = document.querySelector('#notSelectAllButton') as HTMLElement;
    element_marked.style.display = 'none';
  }  

  deleteHistory(){
    this.excluirItems();
    console.log(localStorage.getItem('verify'));
    // this.deleteLastNumber();

    location.reload();
  }

  confirmDelete(){
    let element = document.querySelector('.popup_delete_history') as HTMLElement;
    element.style.display = 'flex';

    let element_back = document.querySelector('.background') as HTMLElement;
    element_back.style.display = 'flex';
  }

  closeConfirmDelete(){
    let element = document.querySelector('.popup_delete_history') as HTMLElement;
    element.style.display = 'none';

    let element_back = document.querySelector('.background') as HTMLElement;
    element_back.style.display = 'none';
  }

}
