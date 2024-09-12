import { Component, Input } from '@angular/core';
import { FieldCardBodyComponent } from '../field-card-body/field-card-body.component';
import { FieldCardBottomSpaceComponent } from '../field-card-bottom-space/field-card-bottom-space.component';
import { FieldCardComponent } from '../field-card/field-card.component';
import { FieldCardExtendedBottomSpaceComponent } from '../field-card-extended-bottom-space/field-card-extended-bottom-space.component';
import { FieldCardHeaderComponent } from '../field-card-header/field-card-header.component';
import { FieldCardLiftedSpaceComponent } from '../field-card-lifted-space/field-card-lifted-space.component';
import { FieldCardTopSpaceComponent } from '../field-card-top-space/field-card-top-space.component';
import { Apollo } from 'apollo-angular';
import { DELETE_POST, LIKE_UNLIKE_POST } from '../graphql.operations';
import { CommentContainerComponent } from '../comment-container/comment-container.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentContainerComponent,FieldCardBodyComponent, FieldCardBottomSpaceComponent, FieldCardComponent,FieldCardExtendedBottomSpaceComponent,FieldCardHeaderComponent, FieldCardLiftedSpaceComponent, FieldCardTopSpaceComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  postData: any;
  @Input()
  author: any;
  @Input()
  body: any;
  @Input()
  numberOfLikes: any;
  @Input()
  numberOfComments: any;
  @Input()
  createdAtText: any;
  isShowingComments: Boolean = this.containsUserComment();

  constructor(private apollo: Apollo) {
    // Do Nothing
  }

  postText() {
    if (this.postData) {
      return JSON.stringify(this.postData)
    }
    return "..."
  }

  async likeUnlikePost() {
    const variables = { userId: "33", postId: this.postData.id };
    this.apollo.mutate({ mutation: LIKE_UNLIKE_POST, variables }).subscribe();
    window.location.reload();
  }

  deletePost() {
    const variables = { postId: this.postData.id };
    this.apollo.mutate({ mutation: DELETE_POST, variables }).subscribe();
    window.location.reload();
  }

  toggleShowComments() {
    this.isShowingComments = !this.isShowingComments;
  }

  hasLikePresent() {
    const matchingLikes = [];
    if (this.postData) {
      console.log(`LIKES: ${JSON.stringify(this.postData)}`);
      const likes = this.postData.likes;
      for (let like of likes) {
        if (like.userId === '33') {
          matchingLikes.push(like);
        }
      }
    }
    return matchingLikes.length > 0;
  }

  hasCreatedAtText() {
    if (this.postData) {
      return this.postData.createdAtText;
    }
    return false;
  }

  isDeletable() {
    if (this.postData) {
      return this.postData.user.id.toString() === '33';
    }
    return false;
  }

  containsUserComment() {
    if (this.postData && this.postData.comments) {
      for (let comment of this.postData.comments) {
        if (comment.user.id === '33') {
          return true;
        }
      }
    }
    return false;
  }
}
