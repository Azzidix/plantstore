import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = false;
  // tslint:disable-next-line: variable-name
  private _userId: string;
  // tslint:disable-next-line: variable-name
  private _userRole: string;

  private user: Users[] = [
    new Users('ab1', 'seler@gmail.com', '123456', 'Purwokerto', 'seler'),
    new Users('ab2', 'buyer@gmail.com', '123456', 'Jakarta', 'buyer'),
  ];

  constructor() {}

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  get userRole() {
    return this._userRole;
  }

  login(email: string, password: string) {
    const check: any = this.user.filter(
      (e) => e.email === email && e.password === password
    );

    // console.log(check);
    if (check.length > 0) {
      this._userIsAuthenticated = true;
      this._userId = check[0].userId;
      this._userRole = check[0].userRole;
    } else {
      this._userIsAuthenticated = false;
    }
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
