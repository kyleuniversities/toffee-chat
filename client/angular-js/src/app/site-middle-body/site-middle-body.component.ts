import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular"
import { GET_POSTS } from '../graphql.operations';
import { PostComponent } from '../post/post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-site-middle-body',
  standalone: true,
  imports: [PostComponent,PostFormComponent],
  templateUrl: './site-middle-body.component.html',
  styleUrl: './site-middle-body.component.css'
})
export class SiteMiddleBodyComponent implements OnInit {
  isLoading: Boolean = true
  postsData: any;

  constructor(private apollo: Apollo) {
    // Do Nothing
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_POSTS,
      variables: { userId: '33' }
    }).valueChanges.subscribe(({data, error}: any) => {
      this.postsData = data.posts
      this.isLoading = false
    })
  }
}
