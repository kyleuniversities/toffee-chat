import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import mutation from "../gql/mutations/register.graphql";

export default class RegistrationForm extends Component {
  @service toffeeChatApollo;
  @service router;

  @action
  async register(event) {
    event.preventDefault();
    const name = this.args.name;
    const username = this.args.username;
    const email = this.args.email;
    const password = this.args.password;
    const confirmPassword = this.args.confirmPassword;
    if (name.length < 3 || name.length > 32) {
      alert("Name length must be between 3 and 32 characters");
      return;
    }
    if (username.length < 3 || username.length > 32) {
      alert("Username length must be between 3 and 32 characters");
      return;
    }
    if (email.length < 3 || email.length > 32) {
      alert("Email length must be between 3 and 32 characters");
      return;
    }
    if (!/^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+.[A-Za-z0-9_-]+/.test(email)) {
      alert("Email must be a proper email");
      return;
    }
    if (password.toString() !== confirmPassword.toString()) {
      alert("Passwords do not match!");
      return;
    }
    const variables = {
      name: name[0].toUpperCase() + name.substring(1),
      username,
      email,
      password,
    };
    await this.toffeeChatApollo.mutate({ mutation, variables }, null);
    alert("Sucessfully registered!");
    alert("You may now log in!");
    this.router.transitionTo("/");
  }
}
