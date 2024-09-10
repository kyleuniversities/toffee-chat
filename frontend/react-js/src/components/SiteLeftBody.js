import { useEffect, useState } from 'react';
import '../App.css';
import ProfileBoxContainer from './ProfileBoxContainer';
import FieldCard from './field-card/FieldCard';
import FieldCardBody from './field-card/FieldCardBody';
import FieldCardBottomSpace from './field-card/FieldCardBottomSpace';
import FieldCardHeader from './field-card/FieldCardHeader';
import FieldCardLiftedSpace from './field-card/FieldCardLiftedSpace';
import FieldCardTopSpace from './field-card/FieldCardTopSpace';
import { GET_USER } from '../queries';
import { graphqlQuery } from '../graphql';

function SiteLeftBody() {
    // Set Up
    const [userData, setUserData] = useState(null)

    // Use Effects
    useEffect(() => {
        graphqlQuery(GET_USER, { userId: "33" }).then((result) => {
            console.log(`result: ${JSON.stringify(result)}`)
            setUserData(result.userById[0])
        })
        .catch((error) => {
            alert(JSON.stringify(error))
        })
    })

    // Return Component
    return (
        <div class="w-100">
            <div class="page-header">My Toffeechat</div>
            {userData && (
                <>
                    <FieldCard>
                        <FieldCardTopSpace>
                            <FieldCardHeader>
                                <ProfileBoxContainer />
                            </FieldCardHeader>
                            <br />
                            <FieldCardBody>
                                { userData.bio }
                            </FieldCardBody>
                        </FieldCardTopSpace>
                        <FieldCardLiftedSpace>
                            <div>
                                <b>Number of Posts: </b> {userData.numberOfAuthoredPosts}
                            </div>
                        </FieldCardLiftedSpace>
                        <FieldCardLiftedSpace>
                            <div>
                                <b>Number of Comments: </b> {userData.numberOfReceivedComments}
                            </div>
                        </FieldCardLiftedSpace>
                        <FieldCardBottomSpace>
                            <div>
                                <b>Number of Likes: </b> {userData.numberOfReceivedLikes}
                            </div>
                        </FieldCardBottomSpace>
                    </FieldCard>
                    <br />
                    <FieldCard>
                        <FieldCardTopSpace>
                            <FieldCardHeader>
                                <div class="profile-box-name">Activity</div>
                            </FieldCardHeader>
                            <FieldCardBody>
                                This shows the total likes and comments that the user <i>"Guest"</i> has authored:
                            </FieldCardBody>
                        </FieldCardTopSpace>
                        <FieldCardLiftedSpace>
                            <div>
                                <b>Authored Likes: </b> {userData.numberOfAuthoredLikes}
                            </div>
                        </FieldCardLiftedSpace>
                        <FieldCardLiftedSpace>
                            <div>
                                <b>Authored Comments: </b> {userData.numberOfAuthoredComments}
                            </div>
                        </FieldCardLiftedSpace>
                    </FieldCard>
                </>
            )}
        </div>
    );
}

export default SiteLeftBody;