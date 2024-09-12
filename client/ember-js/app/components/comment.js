import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import deleteMutation from '../gql/mutations/delete_comment.graphql';

export default class Comment extends Component {
  @queryManager apollo;

  @tracked isDeletable = this.isDeletableComment();

  @action
  async deleteComment() {
    const variables = { commentId: this.args.commentData.id };
    await this.apollo.mutate({ mutation: deleteMutation, variables }, null);
    window.location.reload(true);
  }

  isDeletableComment() {
    if (this.args.commentData) {
      return this.args.commentData.user.id.toString() === '33';
    }
    return false;
  }
}
