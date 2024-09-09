import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import query from '../gql/queries/post.graphql';

export default class SiteMiddleBody extends Component {
  @queryManager apollo;

  @tracked isLoading = true;

  @tracked postsData = [];

  @action
  async getPostsInfo() {
    const result = await this.apollo.query({ query }, null);
    this.postsData = result.posts;
    this.isLoading = false;
  }
}
