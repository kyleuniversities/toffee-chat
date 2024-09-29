import ApolloService from "ember-apollo-client/services/apollo";
import { inject as service } from "@ember/service";
import { setContext } from "@apollo/client/link/context";
import { Promise } from "rsvp";

export default class ToffeeChatApolloService extends ApolloService {
  // Acquire session
  @service session;

  link() {
    let httpLink = super.link();
    let authLink = setContext((request, context) => {
      return this._runAuthorize(request, context);
    });
    return authLink.concat(httpLink);
  }

  _runAuthorize() {
    if (!this.get("session.isAuthenticated")) {
      return {};
    }
    return new Promise((success) => {
      let headers = {};
      let token = null;
      if (
        this.session &&
        this.session.data &&
        this.session.data.authenticated
      ) {
        token = this.session.data.authenticated.access_token;
      } //this.get("session.data.authenticated.token");
      alert("TF_TOKEN: " + JSON.stringify(this.session.data.authenticated));
      alert("TF_TOKEN: " + token);
      headers["Authorization"] = `Bearer ${token}`;
      success({ headers });
    });
  }
}
