import React from 'react';

const Pagination = (props) => {
    const {profilesPerPage, totalProfiles} = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProfiles/profilesPerPage); i++){
        pageNumbers.push(i);
    }
    
    return ( 
        <nav>
            <ul className="pagination justify-content-center">
                <li></li>
            </ul>
        </nav>
     );
}
 
export default Pagination;