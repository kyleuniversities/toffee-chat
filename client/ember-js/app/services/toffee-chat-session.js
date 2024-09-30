import Service from "@ember/service";

export default class ToffeeChatSessionService extends Service {
  getUserName() {
    let name = "Guest";
    const data = localStorage.getItem("ember_simple_auth-session");
    if (data) {
      const sessionData = JSON.parse(data);
      if (
        sessionData &&
        sessionData.authenticated &&
        sessionData.authenticated.user
      ) {
        name = sessionData.authenticated.user.name;
      }
    }
    return name;
  }

  getToken() {
    let token = "";
    const data = localStorage.getItem("ember_simple_auth-session");
    if (data) {
      const sessionData = JSON.parse(data);
      if (
        sessionData &&
        sessionData.authenticated &&
        sessionData.authenticated.access_token
      ) {
        token = sessionData.authenticated.access_token;
      }
    }
    return token;
  }
}
