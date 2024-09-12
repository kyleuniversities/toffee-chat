import '../../App.css';
import Comment from './Comment';
import CommentForm from './CommentForm';

function CommentContainer({ postData, comments }) {
    console.log(`comments: ${JSON.stringify(postData)}`)
  // Return Component
  return (
    <div class="w-100 h-100">
        <div class="comment-container-header align-items-center">
            Comments:
        </div>
        <CommentForm postData={postData} />
        <br />
        {comments.map((comment) => (
            <Comment commentData={comment} author={comment.user.name} body={comment.body} createdAtText={comment.createdAtText} />
        ))}
    </div>
  );
}

export default CommentContainer;
