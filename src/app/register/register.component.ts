import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private User: UserService) { }

  ngOnInit() {
    // TODO: Talk to Dave about getting CSRF setup/exempt.
    this.User.postRegister(
      'Hexpresso',
      'fuckme',
      'hexo@hexo.comnigga'
    ).subscribe((r: any) => {
      console.log(r);
    });
  }

}
