import React from 'react';

import './Filter.css';

const Filter = () => {
    return (
        <div className='Filter btn-group'>
            <button className ='btn btn-outline-primary remove_btn'>All</button>
            <button className ='btn btn-outline-secondary'>Active</button>
            <button className ='btn btn-outline-secondary'>Done</button>
        </div>
    );
}
export default Filter;