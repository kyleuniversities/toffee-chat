import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import query from "../gql/queries/post.graphql";

export default class CommentContainer extends Component {}
