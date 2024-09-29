import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import likeMutation from '../gql/mutations/like_unlike.graphql';
import deleteMutation from '../gql/mutations/delete_post.graphql';

export default class Post extends Component {
  @queryManager apollo;

  @tracked isLiked = this.hasLikePresent();

  @tracked isDeletable = this.isDeletablePost();

  @tracked isShowingComments = this.containsUserComment();

  @action
  async likeUnlikePost() {
    const variables = { userId: '33', postId: this.args.postData.id };
    await this.apollo.mutate({ mutation: likeMutation, variables }, null);
    window.location.reload(true);
  }

  @action
  async deletePost() {
    const variables = { postId: this.args.postData.id };
    await this.apollo.mutate({ mutation: deleteMutation, variables }, null);
    window.location.reload(true);
  }

  @action
  toggleShowComments() {
    this.isShowingComments = !this.isShowingComments;
  }

  hasLikePresent() {
    const matchingLikes = [];
    if (this.args.postData) {
      console.log(`LIKES: ${JSON.stringify(this.args.postData)}`);
      const likes = this.args.postData.likes;
      for (let like of likes) {
        if (like.userId === '33') {
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

  isDeletablePost() {
    if (this.args.postData) {
      return this.args.postData.user.id.toString() === '33';
    }
    return false;
  }

  containsUserComment() {
    if (
      this.args.postData &&
      !this.args.isConservative &&
      this.args.postData.comments
    ) {
      for (let comment of this.args.postData.comments) {
        if (comment.user.id === '33') {
          return true;
        }
      }
    }
    return false;
  }
}
