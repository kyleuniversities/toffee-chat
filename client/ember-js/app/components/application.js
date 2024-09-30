import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import query from "../gql/queries/requester.graphql";

export default class Application extends Component {
  @service toffeeChatApollo;

  @tracked requestUrl = "http://localhost:3000/graphql";

  @tracked requestBody = "";

  @tracked requestResponse = "";

  @action
  setRequestUrl(value) {
    this.requestUrl = value;
  }

  @action
  setRequestBody(value) {
    this.requestBody = value;
  }

  @action
  setRequestResponse(value) {
    this.requestBody = value;
  }

  @action
  async request() {
    const result = await this.toffeeChatApollo.query({ query }, null);
    alert(
      `result: ${JSON.stringify(result.data, null, 2)}, ${JSON.stringify(result.users, null, 2)}`,
    );
    this.requestBody = JSON.stringify(result, null, 2);
  }
}
