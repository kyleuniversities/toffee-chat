import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_COMMENT } from '../graphql.operations';
import { FormsModule } from '@angular/forms'
import { FieldCardHeaderComponent } from '../field-card-header/field-card-header.component';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule,FieldCardHeaderComponent],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
  @Input()
  postData: any;
  commentBody: String;

  constructor(private apollo: Apollo) {
    this.commentBody = ''
  }

  createComment() {
    if (!this.commentBody) {
      alert("Comment body must not be blank")
    }
    const variables = { userId: "33", postId: this.postData.id, body: this.commentBody }
    this.apollo.mutate({ mutation: CREATE_COMMENT, variables }).subscribe()
    window.location.reload()
  }
}
