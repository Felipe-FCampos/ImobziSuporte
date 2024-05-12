import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculaImpostoComponent } from './calcula-imposto/calcula-imposto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'irrf',
    component: CalculaImpostoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
