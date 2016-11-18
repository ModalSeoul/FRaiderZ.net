import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private username: string;
  private email: string;
  private password: string;
  private confirm_password: string;
  private notMatching: boolean = false;

  constructor(private User: UserService) { }

  private register() {
    if (this.password == this.confirm_password) {
      // Passwords match :)
      this.User.postRegister(
        this.username,
        this.password,
        this.email
      ).subscribe((r: any) => {
        console.log(r);
      });
    } else {
      this.notMatching = true;
    }
  }
}
