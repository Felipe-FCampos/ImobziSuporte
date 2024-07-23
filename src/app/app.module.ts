import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculaImpostoComponent } from './calcula-imposto/calcula-imposto.component';
import { environment } from './environments/environments';
import { UserComponent } from './user/user.component';
import { HistoryComponent } from './history/history.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { MultasejurosComponent } from './multasejuros/multasejuros.component';
import { HttpClientModule } from '@angular/common/http';
import { DiaspropComponent } from './diasprop/diasprop.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { DuvidaComponent } from './duvida/duvida.component';
import { CalculatorHistoryComponent } from './calculator-history/calculator-history.component';
import { IrrfTableComponent } from './irrf-table/irrf-table.component';
import { DocHistoryComponent } from './doc-history/doc-history.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculaImpostoComponent,
    UserComponent,
    HistoryComponent,
    SidebarComponent,
    CarouselComponent,
    MultasejurosComponent,
    DiaspropComponent,
    DoubtsComponent,
    DuvidaComponent,
    CalculatorHistoryComponent,
    IrrfTableComponent,
    DocHistoryComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
