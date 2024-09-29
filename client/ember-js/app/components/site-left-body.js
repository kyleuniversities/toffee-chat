import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import query from "../gql/queries/guest.graphql";

export default class SiteLeftBody extends Component {
  @queryManager apollo;

  @tracked userData = {};

  @action
  async getUserInfo() {
    const variables = { userId: "33" };
    const result = await this.apollo.query({ query, variables }, null);
    this.userData = result.userById[0];
  }
}
