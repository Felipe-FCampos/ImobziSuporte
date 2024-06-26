import { Component, ViewContainerRef } from '@angular/core';
import { UserService } from '../user.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../sidebar.service';
import { HistoryService } from '../history.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.desktop.scss', './home_second.component.desktop.scss'],
})
export class HomeComponent {

  dateTime: Date = new Date();
  diaAtual: number = this.dateTime.getDay();
  month: number = this.dateTime.getMonth();
  
  arrayDiaDaSemana: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  arrayMeses: string[] = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  diaDaSemana: string = this.arrayDiaDaSemana[this.diaAtual];
  mesAtual: string = this.arrayMeses[this.month];

  day: string = ("0" + this.dateTime.getDate()).slice(-2);
  year: number = this.dateTime.getFullYear();

  dataCorreta = `${this.diaDaSemana}, ${this.day} de ${this.mesAtual} de ${this.year}`;

  userName: string | null;

  constructor(
    private userService: UserService, 
    private sidebarService: SidebarService, 
    private viewContainerRef: ViewContainerRef,
    private historyService: HistoryService){
    this.userName = this.userService.getUserName();
  }

  openSideBar(){
    this.sidebarService.toggleSideBar(this.viewContainerRef);
  }

  waitForUpdate(){
    alert('Em breve mais atualizações!');
  }
  
}
