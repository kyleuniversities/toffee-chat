import FieldCardBody from '../field-card/FieldCardBody';
import FieldCardHeader from '../field-card/FieldCardHeader';
import FullFieldCard from '../field-card/FullFieldCard';
import '../../App.css';
import { graphqlQuery } from '../../graphql';
import { DELETE_COMMENT } from '../../queries';

function Comment({ commentData, author, body, createdAtText }) {
  // Helper Functions
  const isDeletable = () => {
    if (commentData) {
      return commentData.user.id.toString() === '33';
    }
    return false;
  }

  // Handlers
  const deleteComment = () => {
    const variables = { commentId: commentData.id };
    graphqlQuery(DELETE_COMMENT, variables).then((result) => {
        console.log(`result: ${JSON.stringify(result)}`)
        window.location.reload(true);
    })
    .catch((error) => {
        alert(JSON.stringify(error))
    })
  }

  // Return Component
  return (
    <div class="w-100">
        <FullFieldCard>
                <FieldCardHeader>
                    <div class="d-flex">
                        <div class="px-2 d-flex h-100 h-50p mb-2">
                            <div class="d-flex h-50p align-items-center">
                                <img src="assets/users/user-picture-guest.png" class="post-avatar-image" alt="profile"/>
                            </div>
                            <div class="d-flex mx-2 h-50p align-items-center">
                                <div class="profile-box-name align-items-center">
                                    {author}
                                </div>
                            </div>
                        </div>
                        {isDeletable() && (
                            <div class="px-2 d-flex h-100 h-50p mb-0 text-red flex-right">
                                <div class="field-area field-area-delete option-red" onClick={deleteComment}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </FieldCardHeader>
                <div class="mx-2">
                    <FieldCardBody>{body}</FieldCardBody>
                </div>
                <div class="mx-2 mt-1 d-flex">
                        <div class="d-flex sub-comment-text">
                            <i>{createdAtText}</i>
                        </div>
                </div>
        </FullFieldCard>
        <br />
    </div>
  );
}

export default Comment;
