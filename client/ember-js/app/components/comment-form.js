import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import mutation from "../gql/mutations/comment.graphql";

export default class CommentForm extends Component {
  @service toffeeChatApollo;

  @tracked commentBody = "";

  @action
  async createComment() {
    const variables = {
      postId: this.args.postData.id,
      body: this.commentBody,
    };
    if (!this.commentBody) {
      alert("Comment body must not be blank.");
    }
    await this.toffeeChatApollo.mutate({ mutation, variables }, null);
    window.location.reload(true);
  }
}
