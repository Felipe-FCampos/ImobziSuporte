import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculaImpostoComponent } from './calcula-imposto/calcula-imposto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { DiaspropComponent } from './diasprop/diasprop.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { DuvidaComponent } from './duvida/duvida.component';
import { UserComponent } from './user/user.component';

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
    path:'calculator',
    component: HomeComponent,
  },
  {
    path:'calculator/irrf',
    component: CalculaImpostoComponent,
  },
  {
    path:'history',
    component: HistoryComponent,
  },
  {
    path:'calculator/proportional-days',
    component: DiaspropComponent,
  },
  {
    path:'frequently-doubts',
    component: DoubtsComponent
  },
  {
    path:'frequently-doubts/doubts/:id',
    component: DuvidaComponent
  },
  {
    path:'profile',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
