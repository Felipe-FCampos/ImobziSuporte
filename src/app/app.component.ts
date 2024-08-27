import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'imobzi_calculadora';

  token!: string;

  constructor(private router: Router ){
    console.log('v3.1.3');
  }
  
  ngOnInit(): void {
      this.token = JSON.stringify(localStorage.getItem('UIDtoken'))
      console.log(this.token)

      if(this.token != "null"){
        console.log("Acesso autorizado.");
      } else {
        alert("Dados da sessão expirados. Voltando à tela de login.");
        this.router.navigate(['/']);
      }
  }
}