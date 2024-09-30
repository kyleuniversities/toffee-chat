import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import query from "../gql/queries/my_user_data.graphql";

export default class SiteLeftBody extends Component {
  @service toffeeChatApollo;

  @tracked userData = { id: "0" };

  @action
  async getUserInfo() {
    const result = await this.toffeeChatApollo.query({ query }, null);
    this.userData = result.myUserData[0];
  }
}
