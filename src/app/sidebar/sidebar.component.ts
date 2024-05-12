import { Component, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  userName: string | null | undefined;

  constructor(private sidebarService: SidebarService, private userService: UserService){ 
    this.userName = this.userService.getUserName();
  }

  closeSideBar(){
    this.sidebarService.hideSideBar();
  }

  waitForUpdate(){
    alert('Em breve mais atualizações!');
  }
}
