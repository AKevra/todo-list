import React from 'react';
import './SearchBlock.css';
const SearchBlock = () => {
    const searchText = 'enter what are you want';
    return (
    <div className ='SearchBlock'> 
        <input className='form-control' disapled placeholder={searchText}/>
    </div>
    );
}
export default SearchBlock;
