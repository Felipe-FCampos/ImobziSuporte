import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from '../user.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../sidebar.service';
import { ApiService } from '../api.service';
import { ApiResponse } from '../api-response.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.desktop.scss'],
})
export class HomeComponent implements OnInit {

  valueAdmFee!: number;
  opcaoAdmFee!: string;
  opcao!: string;
  add!: string;
  rent!: number;
  recipient!: number;
  resultado!: number;

  names: string[] = [];
  name!: string;
  mensagem!: ApiResponse;

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
    private apiService: ApiService
  ){
    this.userName = this.userService.getUserName();
    console.log(this.day);
  }

  ngOnInit(): void {
    this.getMessage();
    this.showNames();
  }

  openSideBar(){
    this.sidebarService.toggleSideBar(this.viewContainerRef);
  }

  waitForUpdate(){
    alert('Em breve mais atualizações!');
  }
  

  getMessage(){
    this.apiService.getMessage().subscribe(data => {
      this.mensagem = data;
    })
  }

  showName(){
    this.name = (document.querySelector('#nameForApi') as HTMLInputElement).value;
    this.apiService.sendName(this.name).subscribe(data => {
      this.name = data.name
    });
  }

  showNames(){
    this.apiService.getNames().subscribe(data => {
      this.names = data.map((item: { name: string; }) => item.name)
      console.log(this.names)
    })
  }

  somar(){
    this.rent = parseFloat((document.querySelector('#num1') as HTMLInputElement).value);
    this.recipient = parseFloat((document.querySelector('#num2') as HTMLInputElement).value);
    this.opcao = (document.querySelector('input[name="optionSimplifiedDiscount"]:checked') as HTMLInputElement).value;
    this.opcaoAdmFee = (document.querySelector('input[name="opcaoAdmFee"]:checked') as HTMLInputElement).value;
    
    this.apiService.sendItems(this.rent, this.recipient, this.opcao, this.opcaoAdmFee, this.valueAdmFee).subscribe(items => {
      this.resultado = items.resultado
      this.opcao = this.add
      this.opcaoAdmFee = this.add
      console.log(this.resultado)
    })

  }
}
