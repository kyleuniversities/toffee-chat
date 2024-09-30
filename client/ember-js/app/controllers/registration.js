import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class RegistrationController extends Controller {
  @tracked name;
  @tracked email;
  @tracked username;
  @tracked password;
  @tracked confirmPassword;
}
