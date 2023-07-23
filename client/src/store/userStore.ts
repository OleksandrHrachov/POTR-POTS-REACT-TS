import { makeAutoObservable } from 'mobx';

export class UserStore {
  _isAuth: boolean;

  constructor() {
    this._isAuth = false;
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this._isAuth = value;
  }

  get isAuth() {
    return this._isAuth;
  }
}
