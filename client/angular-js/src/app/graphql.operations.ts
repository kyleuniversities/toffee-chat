import { gql } from "apollo-angular"

const GET_USER = gql`
query($userId: String!) {
    userById(id: $userId) {
        id,
        name,
        username,
        bio,
        numberOfAuthoredPosts,
        numberOfAuthoredComments,
        numberOfAuthoredLikes,
        numberOfReceivedComments,
        numberOfReceivedLikes,
    }
}
`
const GET_NEWS_POSTS = gql`
query {
    newsPosts {
        id,
        body,
        numberOfLikes,
        numberOfComments,
        createdAtText,
        user {
            id,
            name
        },
        likes {
            userId
        }
    }
}
`

const GET_POSTS = gql`
query($userId: String!) {
    posts(userId: $userId) {
        id,
        body,
        numberOfLikes,
        numberOfComments,
        createdAtText,
        user {
            id,
            name
        },
        comments {
            id,
            body,
            createdAtText,
            user {
                id,
                name
            }
        },
        likes {
            userId
        }
    }
}
`

const CREATE_POST = gql`
mutation($userId: String!, $body: String!) {
    createPost(userId: $userId, body: $body) {
        id,
        body,
        numberOfLikes,
        numberOfComments,
        user {
            name
        }
    }
}
`

const DELETE_POST = gql`
mutation($postId: String!) {
    deletePost(id: $postId) {
        id,
        body
    }
}
`

const LIKE_UNLIKE_POST = gql`
mutation($userId: String!, $postId: String!) {
    likeUnlikePost(userId: $userId, postId: $postId) {
        userId,
        postId
    }
}
`

const CREATE_COMMENT = gql`
mutation($userId: String!, $postId: String!, $body: String!) {
    createComment(userId: $userId, postId: $postId, body: $body) {
        id,
        body
    }
}
`

const DELETE_COMMENT = gql`
mutation($commentId: String!) {
    deleteComment(id: $commentId) {
        id,
        body
    }
}
`

export { GET_USER, GET_NEWS_POSTS, GET_POSTS, CREATE_POST, DELETE_POST, LIKE_UNLIKE_POST, CREATE_COMMENT, DELETE_COMMENT }