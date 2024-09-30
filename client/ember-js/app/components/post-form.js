import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import EmberObject from "@ember/object";
import mutation from "../gql/mutations/post.graphql";
import query2 from "../gql/queries/post.graphql";

export default class PostForm extends Component {
  @service toffeeChatApollo;

  @tracked postBody = "";

  @action
  async createPost() {
    const variables = { body: this.postBody };
    if (!this.postBody) {
      alert("Post body must not be blank.");
      return;
    }
    await this.toffeeChatApollo.mutate({ mutation, variables }, null);
    window.location.reload(true);
  }
}
