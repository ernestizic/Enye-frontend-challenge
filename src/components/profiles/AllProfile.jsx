import React from 'react';
import Profile from './Profile'

const AllProfiles =(props)=> {
    const {profiles} = props;

    let eachProfile; 
    eachProfile = profiles.length ? (
        profiles.map(profile => (
            <Profile key={profile.id} profile={profile} />
        ))
    ) : (
        <h4 style={{textAlign: "center", paddingTop: "40px"}}> Nothing to see here </h4>
    )

    return(
        <div>
            <p>{eachProfile}</p>
        </div>
    );
}
 
export default AllProfiles;