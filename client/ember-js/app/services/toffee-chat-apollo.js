import ApolloService from "ember-apollo-client/services/apollo";
import { inject as service } from "@ember/service";
import { setContext } from "@apollo/client/link/context";
import { Promise } from "rsvp";

export default class ToffeeChatApolloService extends ApolloService {
  // Acquire session
  @service toffeeChatSession;

  link() {
    let httpLink = super.link();
    let authLink = setContext((request, context) => {
      return this._runAuthorize(request, context);
    });
    return authLink.concat(httpLink);
  }

  _runAuthorize() {
    let token = this.toffeeChatSession.getToken();
    if (!token) {
      return {};
    }
    return new Promise((success) => {
      let headers = {};
      headers["Authorization"] = `Bearer ${token}`;
      success({ headers });
    });
  }
}
