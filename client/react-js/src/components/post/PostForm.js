import FieldCardHeader from '../field-card/FieldCardHeader';
import FullFieldCard from '../field-card/FullFieldCard';
import '../../App.css';
import { useState } from 'react';
import { CREATE_POST } from '../../queries';
import { graphqlQuery } from '../../graphql';

function PostForm({ postData }) {
    // Set Up
    const [postBody, setPostBody] = useState('')

    // Handlers
    const createPost = () => {
      const variables = { userId: "33", body: postBody };
      graphqlQuery(CREATE_POST, variables).then((result) => {
          console.log(`result: ${JSON.stringify(result)}`)
          window.location.reload(true);
      })
      .catch((error) => {
          alert(JSON.stringify(error))
      })
    }

    // Return Component
    return (
        <FullFieldCard>
            <FieldCardHeader>
                <div class="post-form-header">
                    Write a Post
                </div>
            </FieldCardHeader>
            <input id="post-form-field" class="post-form-field px-2 mb-2" placeholder="Something you wanna share? Feel free to write it here!" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            <button class="post-form-button" type="button" onClick={ createPost }>Post</button>
        </FullFieldCard>
    );
}

export default PostForm;
