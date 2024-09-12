import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DELETE_COMMENT } from '../graphql.operations';
import { FieldCardBodyComponent } from '../field-card-body/field-card-body.component';
import { FieldCardBottomSpaceComponent } from '../field-card-bottom-space/field-card-bottom-space.component';
import { FieldCardComponent } from '../field-card/field-card.component';
import { FieldCardExtendedBottomSpaceComponent } from '../field-card-extended-bottom-space/field-card-extended-bottom-space.component';
import { FieldCardHeaderComponent } from '../field-card-header/field-card-header.component';
import { FieldCardLiftedSpaceComponent } from '../field-card-lifted-space/field-card-lifted-space.component';
import { FieldCardTopSpaceComponent } from '../field-card-top-space/field-card-top-space.component';
import { FullFieldCardComponent } from '../full-field-card/full-field-card.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FullFieldCardComponent,FieldCardBodyComponent, FieldCardBottomSpaceComponent, FieldCardComponent,FieldCardExtendedBottomSpaceComponent,FieldCardHeaderComponent, FieldCardLiftedSpaceComponent, FieldCardTopSpaceComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  commentData: any;
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
  isShowingComments: Boolean = false;

  constructor(private apollo: Apollo) {
    // Do Nothing
  }

  deleteComment() {
    const variables = { commentId: this.commentData.id };
    this.apollo.mutate({ mutation: DELETE_COMMENT, variables }).subscribe();
    window.location.reload();
  }

  isDeletable() {
    if (this.commentData) {
      return this.commentData.user.id.toString() === '33';
    }
    return false;
  }
}
