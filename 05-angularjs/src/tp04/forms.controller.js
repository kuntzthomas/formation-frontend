export default class FormsCtrl {
  constructor() {
    this.userSaved;
    this.user;
  }
  reset() {
    this.user = angular.copy(this.userSaved);
  }

  update(user) {
    this.userSaved = angular.copy(user)
  }
}
