import React from 'react';
const Header = () => {
    const st = {
        fontSize: '40px',
        color: 'aqua',
    }
    return (
        <h1 style = {st} className='header'>Todo list</h1>
    );
}
export default Header;