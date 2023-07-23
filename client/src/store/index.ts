import { UserStore } from './userStore';
import { NavigationStore } from './navigationStore'

export class RootStore {
  userStore: UserStore;
  navigationStore: NavigationStore;

  constructor() {
    this.userStore = new UserStore();
    this.navigationStore = new NavigationStore();
  }
}
