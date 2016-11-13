import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import 'rxjs/add/operator/cache';

@Injectable()
export class UserService {

  constructor(private http: HttpService) { }

  public postRegister(
    username: string,
    password: string,
    email: string)
  {
    const network$ = this.http.post('register', {
      username,
      email,
      password
    }).cache();
    network$.subscribe();
    return network$;
  }
}
