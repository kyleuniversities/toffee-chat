import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import query from "../gql/queries/post.graphql";

export default class SiteMiddleBody extends Component {
  @service toffeeChatApollo;

  @tracked isLoading = true;

  @tracked postsData = [];

  @action
  async getPostsInfo() {
    const variables = { userId: "33" };
    const result = await this.toffeeChatApollo.query(
      { query, variables },
      null,
    );
    this.postsData = result.posts;
    this.isLoading = false;
  }
}
