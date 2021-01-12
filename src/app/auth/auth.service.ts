import { Injectable } from "@angular/core";
import { Users } from "./users.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userId: string;
  private _userRole: string;

  private user: Users[] = [
    new Users('ab1','seler@gmail.com','123456','Purwokerto','seler'),
    new Users('ab2','buyer@gmail.com','123456','Jakarta','buyer')
  ]

  constructor() {
    
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  get userRole() {
    return this._userRole;
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
