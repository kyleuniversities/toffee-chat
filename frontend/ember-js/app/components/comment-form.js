import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import mutation from '../gql/mutations/comment.graphql';

export default class CommentForm extends Component {
  @queryManager apollo;

  @tracked commentBody = '';

  @action
  async createComment() {
    const variables = { userId: "33", postId: this.args.postData.id, body: this.commentBody };
    if (!this.commentBody) {
      alert('Comment body must not be blank.');
    }
    await this.apollo.mutate({ mutation, variables }, null);
    window.location.reload(true);
  }
}
