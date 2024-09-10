import { Component } from '@angular/core';
import { FieldCardBodyComponent } from '../field-card-body/field-card-body.component';
import { FieldCardBottomSpaceComponent } from '../field-card-bottom-space/field-card-bottom-space.component';
import { FieldCardComponent } from '../field-card/field-card.component';
import { FieldCardExtendedBottomSpaceComponent } from '../field-card-extended-bottom-space/field-card-extended-bottom-space.component';
import { FieldCardHeaderComponent } from '../field-card-header/field-card-header.component';
import { FieldCardLiftedSpaceComponent } from '../field-card-lifted-space/field-card-lifted-space.component';
import { FieldCardTopSpaceComponent } from '../field-card-top-space/field-card-top-space.component';
import { FullFieldCardComponent } from '../full-field-card/full-field-card.component';
import { FormsModule } from '@angular/forms'
import { Apollo } from 'apollo-angular';
import { CREATE_POST } from '../graphql.operations';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule,FullFieldCardComponent,FieldCardBodyComponent, FieldCardBottomSpaceComponent, FieldCardComponent,FieldCardExtendedBottomSpaceComponent,FieldCardHeaderComponent, FieldCardLiftedSpaceComponent, FieldCardTopSpaceComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  postBody: String;

  constructor(private apollo: Apollo) {
    this.postBody = ''
  }

  createPost() {
    if (!this.postBody) {
      alert("Post body must not be blank")
    }
    const variables = { userId: "33", body: this.postBody }
    this.apollo.mutate({ mutation: CREATE_POST, variables }).subscribe()
    window.location.reload()
  }
}
