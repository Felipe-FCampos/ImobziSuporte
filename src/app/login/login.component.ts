import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.desktop.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  user = {
    uid: "",
    email: "",
    password: "",
  }

  onReady = (callback: () => void) => {
    let intervalId = window.setInterval(() => {
      if ((document.getElementsByTagName('main')[0] !== undefined)) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1950);
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

  constructor(private router: Router, private userService: UserService, private ngFireAuth: AngularFireAuth) {
    this.onReady(this.start.bind(this));
  }

  async login() {
    try {
      const credential = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      const userId = credential.user?.uid

      if(credential.user?.email && userId){
        this.user.uid = userId;
        localStorage.setItem('UIDtoken', this.user.uid);
        this.router.navigate(['/home']);
      } else {
        alert("E-mail ou senha inválidos! :(");
      }

    } catch (error) {
      alert("Insira os dados corretamente.")
    }
    // let userNameInput = document.getElementById('name') as HTMLInputElement;
    // let userConfirmed: boolean;

    // if (userNameInput.value) {
    //   userConfirmed = true;
    // } else {
    //   userConfirmed = false;
    // }

    // if (userConfirmed == true) {
    //   this.userService.setUserName(userNameInput.value);

    //   this.router.navigate(['/home']);

    //   let element = document.getElementById('main') as HTMLElement;
    //   element.style.display = 'none';

    // } else {
    //   userNameInput.style.border = '2px solid #ff5050';
    //   userNameInput.placeholder = 'Nome inválido';
    // }
}
}

