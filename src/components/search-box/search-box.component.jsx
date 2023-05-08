import React from "react";

const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input type="search" placeholder="search monster" onChange={onSearchChange}/>
        </div>
    );
}

export default SearchBox;