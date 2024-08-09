import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.desktop.scss']
})
export class LoginComponent {
  onReady = (callback: () => void) => {
    let intervalId = window.setInterval(() => {
      if ((document.getElementsByTagName('main')[0] !== undefined)) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 0 /*1950*/);
  };

  setVisible(selector: string, visible: boolean) {
    const element = document.querySelector(selector) as HTMLElement;

    if (element) {
      element.style.display = visible ? 'block' : 'none';
    }
  };

  start = (() => {
    this.setVisible('.inputName', true);
    this.setVisible('#login_logo', true);
    this.setVisible('#loading_screen', false);
  });

  constructor(private router: Router, private userService: UserService) {
    this.onReady(this.start.bind(this));
  }

  validateData() {
    let userNameInput = document.getElementById('user') as HTMLInputElement;
    let userEmailInput = document.getElementById('email') as HTMLInputElement;
    let userConfirmed: boolean;

    if (userNameInput.value && userEmailInput.value) {
      userConfirmed = true;
    } else {
      userConfirmed = false;
    }

    if (userConfirmed == true) {
      this.userService.setUserName(userNameInput.value);

      this.router.navigate(['/home']);

      let element = document.getElementById('main') as HTMLElement;
      element.style.display = 'none';

    } else {
      userNameInput.style.border = '1px solid #ff5050';
      userNameInput.placeholder = 'Nome inválido';
      userEmailInput.style.border = '1px solid #ff5050';
      userEmailInput.placeholder = 'Email inválido';
    }
  }
}


