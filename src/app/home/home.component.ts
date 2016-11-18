import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/** ----------------------------------------------------------------------
  Any requests or logic about a user should be handled here.
  In a perfect world, most logic would be happening in services.
  -----------------------------------------------------------------------*/

export class HomeComponent implements OnInit {
  private content: any = {};

  constructor(private User: UserService) { }

  ngOnInit() {
    this.User.getUserCount().subscribe((r: any) => {
      this.content.user_count = r.players;
    });
  }

}
