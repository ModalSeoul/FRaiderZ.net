import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private User: UserService) { }

  ngOnInit() {
    // TODO: Talk to Dave about fucking CORS
    this.User.getUserCount().subscribe((r: any) => {
      console.log(r);
    });
  }

}
