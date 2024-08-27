import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

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
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
    //NoopAnimationsModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
