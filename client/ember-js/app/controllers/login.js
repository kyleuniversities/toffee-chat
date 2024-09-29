import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  @tracked email = "adam234@example.com";
  @tracked password = "adam234&&";
}
