import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './sidebar.component.desktop.scss']
})
export class SidebarComponent implements OnInit {

  isHome: boolean = false;
  isCalc: boolean = false;
  istask: boolean = false;
  isKnow: boolean = false;


  constructor(private sidebarService: SidebarService, private userService: UserService, private router: Router){ }

  ngOnInit(): void {
    this.isHome = this.router.url == '/home';
    this.isCalc = this.router.url == '/irrf' || this.router.url == '/proportional-days';
    this.istask = this.router.url == '/task';
    this.isKnow = this.router.url == '/frequently-doubts';
  }
}
