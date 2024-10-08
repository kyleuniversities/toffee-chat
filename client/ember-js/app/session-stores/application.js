import LocalStorageStore from "ember-simple-auth/session-stores/local-storage";
import RSVP from "rsvp";

export default class ApplicationSessionStore extends LocalStorageStore {
  restore() {
    let data = localStorage.getItem("ember_simple_auth-session");
    return RSVP.resolve(JSON.parse(data) || {});
  }
}
