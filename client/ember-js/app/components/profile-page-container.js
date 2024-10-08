import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import query from "../gql/queries/user_by_id.graphql";

export default class ProfilePageContainer extends Component {
  @queryManager apollo;

  @tracked userProfileData = {};
  @tracked hasNoPosts = this.userHasNoPosts();

  @action
  async getUserById() {
    const variables = { userId: this.args.user.id };
    const result = await this.apollo.query({ query, variables }, null);
    const userProfileData = result.userById[0];
    this.userProfileData = userProfileData;
    if (userProfileData.posts && userProfileData.posts.length > 0) {
      this.hasNoPosts = false;
    }
  }

  @action
  userHasNoPosts() {
    console.log(JSON.stringify(this.userProfileData));
    return (
      !this.userProfileData ||
      !this.userProfileData.posts ||
      this.userProfileData.posts.length === 0
    );
  }
}
