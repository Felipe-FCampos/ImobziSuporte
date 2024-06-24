import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.component.desktop.scss']
})
export class UserComponent {

  userName: string | null;
  userEmail = 'suporte@imobzi.com';
  userNumber = '(11) 4063-4100';

  constructor(private userService: UserService){
    this.userName = this.userService.getUserName();
  }

}
