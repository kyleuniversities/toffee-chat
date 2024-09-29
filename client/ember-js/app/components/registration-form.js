import Component from '@glimmer/component';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import mutation from '../gql/mutations/comment.graphql';

export default class RegistrationForm extends Component {
  @queryManager apollo;

  @action
  async register() {
    const name = this.args.name;
    const username = this.args.username;
    const email = this.args.email;
    const password = this.args.password;
    const confirmPassword = this.args.confirmPassword;
    alert(
      `${JSON.stringify({ name, username, email, password, confirmPassword })}`,
    );
  }
}
