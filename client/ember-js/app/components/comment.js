import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import deleteMutation from "../gql/mutations/delete_comment.graphql";

export default class Comment extends Component {
  @service toffeeChatApollo;

  @service toffeeChatSession;

  @tracked isDeletable = this.isDeletableComment();

  @action
  async deleteComment() {
    const variables = { commentId: this.args.commentData.id };
    await this.toffeeChatApollo.mutate(
      { mutation: deleteMutation, variables },
      null,
    );
    window.location.reload(true);
  }

  isDeletableComment() {
    if (this.args.commentData) {
      return (
        this.args.commentData.user.id.toString() ===
        this.toffeeChatSession.getUserId()
      );
    }
    return false;
  }
}
