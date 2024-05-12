import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  
  private componentRef: ComponentRef<SidebarComponent> | null = null;

  toggleSideBar(viewContainerRef: ViewContainerRef){
    this.componentRef = viewContainerRef.createComponent(SidebarComponent);
  }

  hideSideBar(){
    if(this.componentRef){
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
