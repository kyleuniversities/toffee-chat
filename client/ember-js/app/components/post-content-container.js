import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import EmberObject from "@ember/object";
import likeMutation from "../gql/mutations/like_unlike.graphql";
import deleteMutation from "../gql/mutations/delete_post.graphql";

export default class PostContentContainer extends Component {
  @service toffeeChatApollo;

  @service toffeeChatSession;

  @tracked isLiked = this.hasLikePresent();

  @action
  async likeUnlikePost() {
    const variables = { postId: this.args.postData.id };
    await this.toffeeChatApollo.mutate(
      { mutation: likeMutation, variables },
      null,
    );
    window.location.reload(true);
  }

  @action
  toggleShowComments() {
    this.isShowingComments = !this.isShowingComments;
  }

  hasLikePresent() {
    const matchingLikes = [];
    if (this.args.postData) {
      const likes = this.args.postData.likes;
      // console.log(
      //   `hasLikesPresent-POST_DATA: ${JSON.stringify(this.args.postData)}`,
      // );
      // console.log(`hasLikesPresent-LIKES: ${JSON.stringify(likes)}`);
      const sessionUserId = this.toffeeChatSession.getUserId();
      for (let like of likes) {
        // console.log(` Check_Like: ${like.userId} === ${sessionUserId}`);
        if (like.userId === this.toffeeChatSession.getUserId()) {
          matchingLikes.push(like);
        }
      }
    }
    return matchingLikes.length > 0;
  }

  hasCreatedAtText() {
    if (this.args.postData) {
      return this.args.postData.createdAtText;
    }
    return false;
  }
}
