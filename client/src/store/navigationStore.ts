import { makeAutoObservable } from 'mobx';

export class NavigationStore {
  _currentRoute: string;

  constructor() {
    this._currentRoute = '';
    makeAutoObservable(this);
  }

  setCurrentRoute(value: string) {
    this._currentRoute = value;
  }

  get currentRoute() {
    return this._currentRoute;
  }
}
