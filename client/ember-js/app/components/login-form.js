import Component from "@glimmer/component";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import { inject as service } from "@ember/service";
import mutation from "../gql/mutations/comment.graphql";
import ENV from "../config/environment";

export default class LoginForm extends Component {
  @queryManager apollo;

  @service session;
  @service router;

  @action
  async logIn() {
    const email = this.args.email;
    const password = this.args.password;
    try {
      await this.session.authenticate("authenticator:oauth", email, password);
      alert("Authenticated");
    } catch (error) {
      alert("Invalid credentials: Please try again.");
    }
  }
}
