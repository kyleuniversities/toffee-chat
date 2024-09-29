import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import { inject as service } from "@ember/service";
import EmberObject from "@ember/object";
import likeMutation from "../gql/mutations/like_unlike.graphql";
import deleteMutation from "../gql/mutations/delete_post.graphql";

export default class PostAuthorContainer extends Component {}
