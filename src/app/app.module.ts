import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

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
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculaImpostoComponent,
    UserComponent,
    HistoryComponent,
    SidebarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule, 
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
