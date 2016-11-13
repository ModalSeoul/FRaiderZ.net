import { Component } from '@angular/core';

/*
  ______                  _         _
 |  ____|                | |       | |
 | |__ _ __ ___  ___  ___| |_ _   _| | ___
 |  __| '__/ _ \/ _ \/ __| __| | | | |/ _ \
 | |  | | |  __/  __/\__ \ |_| |_| | |  __/
 |_|  |_|  \___|\___||___/\__|\__, |_|\___|
                               __/ |
                              |___/        */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private title: string = 'FRaiderZ - It\'s not peer 2 peer so Mike\'s useless!';
}
