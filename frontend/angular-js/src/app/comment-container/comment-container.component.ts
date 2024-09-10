import { Component, Input } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [CommentFormComponent,CommentComponent],
  templateUrl: './comment-container.component.html',
  styleUrl: './comment-container.component.css'
})
export class CommentContainerComponent {
  @Input()
  postData: any;
  @Input()
  comments: any;
}
