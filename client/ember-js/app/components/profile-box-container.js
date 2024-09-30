import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ProfileBoxContainer extends Component {
  @service toffeeChatSession;
  @tracked profileName = this.getCurrentUserName();
  @tracked isGuestUser = this.isGuest();
  @tracked profileUrl = this.getProfileUrl();

  @action
  async toggleShow() {
    document
      .getElementById("profile-box-container")
      .classList.toggle("profile-box-show");
  }

  @action
  getCurrentUserName() {
    return this.toffeeChatSession.getUserName();
  }

  @action
  isGuest() {
    return this.getCurrentUserName() === "Guest";
  }

  @action
  getProfileUrl() {
    return `/profile/${this.toffeeChatSession.getUserId()}`;
  }

  @action
  logOut() {
    this.toffeeChatSession.invalidate();
  }
}
