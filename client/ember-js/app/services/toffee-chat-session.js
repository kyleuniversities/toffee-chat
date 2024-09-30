import Service from "@ember/service";
import { inject as service } from "@ember/service";
import ENV from "../config/environment";

export default class ToffeeChatSessionService extends Service {
  @service session;
  @service maps;

  getUserId() {
    let id = ENV.GUEST_USER_ID;
    const data = localStorage.getItem("ember_simple_auth-session");
    if (data) {
      const sessionData = JSON.parse(data);
      id = this.maps.getValue(sessionData, "authenticated.user.id", id);
    }
    return id;
  }

  getUserName() {
    let name = "Guest";
    const data = localStorage.getItem("ember_simple_auth-session");
    if (data) {
      const sessionData = JSON.parse(data);
      name = this.maps.getValue(sessionData, "authenticated.user.name", name);
    }
    return name;
  }

  getToken() {
    let token = "";
    const data = localStorage.getItem("ember_simple_auth-session");
    if (data) {
      const sessionData = JSON.parse(data);
      token = this.maps.getValue(
        sessionData,
        "authenticated.access_token",
        token,
      );
    }
    return token;
  }

  invalidate() {
    this.session.invalidate();
    localStorage.removeItem("ember_simple_auth-session");
  }
}
