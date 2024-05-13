import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss', '../calcula-imposto/calcula-imposto.component.scss']
})
export class HistoryComponent implements OnInit { 

  historico: number[] = [];
  valorFinal!: number;

  constructor(private sideBarService: SidebarService, private viewContentRef: ViewContainerRef, private historyService: HistoryService) { 
    
  }

  ngOnInit(){
    this.historico = this.historyService.getHistory();
  }

  openSideBar(){
    this.sideBarService.toggleSideBar(this.viewContentRef);
  }

}
