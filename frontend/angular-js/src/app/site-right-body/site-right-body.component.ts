import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_NEWS_POSTS } from '../graphql.operations';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-site-right-body',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './site-right-body.component.html',
  styleUrl: './site-right-body.component.css'
})
export class SiteRightBodyComponent {
  isLoading: Boolean = true
  postsData: any;

  constructor(private apollo: Apollo) {
    // Do Nothing
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_NEWS_POSTS
    }).valueChanges.subscribe(({data, error}: any) => {
      this.postsData = data.newsPosts
      this.isLoading = false
    })
  }
}
