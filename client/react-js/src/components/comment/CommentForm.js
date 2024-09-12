import FieldCardHeader from '../field-card/FieldCardHeader';
import FullFieldCard from '../field-card/FullFieldCard';
import '../../App.css';
import { useState } from 'react';
import { CREATE_COMMENT } from '../../queries';
import { graphqlQuery } from '../../graphql';

function CommentForm({ postData }) {
    // Set Up
    const [commentBody, setCommentBody] = useState('')

    // Handlers
    const createComment = () => {
      const variables = { userId: "33", postId: postData.id, body: commentBody };
      graphqlQuery(CREATE_COMMENT, variables).then((result) => {
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
                    Write a Comment
                </div>
            </FieldCardHeader>
            <input id="post-form-field" class="post-form-field px-2 mb-2" placeholder="Write a comment here!" value={commentBody} onChange={(e) => setCommentBody(e.target.value)}/>
            <button class="post-form-button" type="button" onClick={ createComment }>Post Comment</button>
        </FullFieldCard>
    );
}

export default CommentForm;
