import { makeAutoObservable } from 'mobx';

export class UserStore {
  _userId: string;
  _userEmail: string;
  _userFirstName: string;
  _userLastName: string;
  _isAuth: boolean;

  constructor() {
    this._userId = '';
    this._userEmail = '';
    this._userFirstName = '';
    this._userLastName = '';
    this._isAuth = false;
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this._isAuth = value;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUser(id: string, email: string, firstName: string, lastName: string) {
    this._userId =id;
    this._userEmail = email;
    this._userFirstName = firstName;
    this._userLastName = lastName;
  }

  get currentUser() {
    return {
      userId: this._userId,
      userEmail: this._userEmail,
      userFirstName: this._userFirstName,
      userLastName: this._userLastName
    }
  }

  resetUser() {
    this._userId = '';
    this._userEmail = '';
    this._userFirstName = '';
    this._userLastName = '';
    this._isAuth = false;
  }
}
