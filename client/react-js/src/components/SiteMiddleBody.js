import { useEffect, useState } from 'react';
import '../App.css';
import ProfileBoxContainer from './ProfileBoxContainer';
import FieldCard from './field-card/FieldCard';
import FieldCardBody from './field-card/FieldCardBody';
import FieldCardBottomSpace from './field-card/FieldCardBottomSpace';
import FieldCardHeader from './field-card/FieldCardHeader';
import FieldCardLiftedSpace from './field-card/FieldCardLiftedSpace';
import FieldCardTopSpace from './field-card/FieldCardTopSpace';
import { GET_NEWS_POSTS, GET_POSTS, GET_USER } from '../queries';
import { graphqlQuery } from '../graphql';
import Post from './post/Post';
import PostForm from './post/PostForm';

function SiteMiddleBody() {
    // Set Up
    const [isLoading, setIsLoading] = useState(false)
    const [postsData, setPostsData] = useState([])

    // Use Effects
    useEffect(() => {
        const variables = { userId: "33" }
        graphqlQuery(GET_POSTS, variables).then((result) => {
            console.log(`result: ${JSON.stringify(result)}`)
            setPostsData(result.posts)
            setIsLoading(false)
        })
        .catch((error) => {
            alert(JSON.stringify(error))
        })
    })

    // Return Component
    return (
        <div class="w-100">
            <div class="page-header">Posts</div>
            <PostForm />
            <br />
            <div class="w-100">
                {isLoading ? (
                    <p>Loading posts...</p>
                ): (
                    <>
                        {postsData.map((post) => (
                            <Post postData={post} author={post.user.name} body={post.body} numberOfLikes={post.numberOfLikes} numberOfComments={post.numberOfComments} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default SiteMiddleBody;