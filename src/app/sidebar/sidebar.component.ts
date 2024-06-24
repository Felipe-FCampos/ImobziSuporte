import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './sidebar.component.desktop.scss']
})
export class SidebarComponent implements OnInit {

  isDropdownOpen: boolean = false;

  isHome: boolean = false;
  isCalc: boolean = false;
  istask: boolean = false;
  isKnow: boolean = false;
  verify!: boolean;


  constructor(private sidebarService: SidebarService, private userService: UserService, private router: Router){ }

  ngOnInit(): void {
    this.isHome = this.router.url == '/home';
    this.isCalc = this.router.url == '/calculator' || this.router.url == '/calculator/irrf' || this.router.url == '/calculator/proportional-days';
    this.istask = this.router.url == '/task';
    this.isKnow = this.router.url == '/frequently-doubts';
  }

  changeURL(){
    window.location.href = '/calculator';
  }

  options(){
    if(this.verify == false){
    

    let element = document.getElementById('options') as HTMLElement;
    // element.style.display = 'block';

    element.animate([
      { 
        maxHeight: '0', 
        opacity: '0', 
        visibility: 'hidden' 
      },
      { 
        maxHeight: '500px', 
        opacity: '1', 
        visibility: 'visible' 
      } 
    ],
    {
      duration: 250,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    let element_arrow = document.getElementById('button_calc_up') as HTMLElement;
    element_arrow.style.transform = 'rotate(0deg)';

    this.verify = true;
    } else {
      let element = document.getElementById('options') as HTMLElement;
      // element.style.display = 'none';
  
      element.animate([
        { 
          maxHeight: '500px', 
          opacity: '1', 
          visibility: 'visible' },
        { 
          maxHeight: '0',
          opacity: '0', 
          visibility: 'hidden'
         }
      ], 
      {
        duration: 250,
        easing: 'ease-in-out',
        fill: 'forwards'
      });

      let element_arrow = document.getElementById('button_calc_up') as HTMLElement;
      element_arrow.style.transform = 'rotate(180deg)';

      this.verify = false;
    }
  }

  openUserMenu(){
    let element = document.getElementById('userMenu') as HTMLElement;

    if(this.isDropdownOpen == false){
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }

    this.isDropdownOpen = !this.isDropdownOpen
  }

  // @HostListener('document:click', ['$event'])
  // clickOutSide(event: Event){
  //   let element = document.getElementById('userMenu') as HTMLElement;
  //   if(document.getElementById('userMenu')?.contains(event.target as Node)){
  //     this.isDropdownOpen = false;
      
  //     element.style.display = 'none';
  //   }
}
