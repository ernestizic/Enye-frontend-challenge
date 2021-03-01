import React from 'react';

const SearchBar = (props) => {
    const {onChange} = props;
    return ( 
        <input 
            type="search" 
            placeholder="Search..."
            onChange={onChange}
            style={{width: "100%", height:"39px", padding: "10px"}}
        />
     );
}
 
export default SearchBar;