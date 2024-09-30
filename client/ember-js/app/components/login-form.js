import Component from "@glimmer/component";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import { inject as service } from "@ember/service";

export default class LoginForm extends Component {
  @queryManager apollo;

  @service session;
  @service router;

  @action
  async logIn(event) {
    event.preventDefault();
    const email = this.args.email;
    const password = this.args.password;
    try {
      await this.session.authenticate("authenticator:oauth", email, password);
      this.router.transitionTo("/");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      alert("Invalid credentials: Please try again.");
    }
  }
}
