import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imobzi_calculadora';

  constructor(private router: Router ){
    console.log('v2.0.1');
  }
  
  
}