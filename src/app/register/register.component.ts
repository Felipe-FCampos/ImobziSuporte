import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './register.component.desktop.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

  constructor(
    private userService: UserService
  ){

  }

  user = {
    uid: "",
    userName: "",
    email: "",
    password: "",
  }

  register(){
    let uid = this.user.uid;
    let userName = this.user.userName;
    let email = this.user.email;
    let password = this.user.password;

    this.userService.addUser(uid, userName, email, password).subscribe({
      next: (response) => {
      console.log(response)
      alert("Registro feito com sucesso!");
    }, 
    error: (error) => {
      console.error(error)
      alert('E-mail ou senha incorreto :(');
    }  
  }); 
    
  }

}
