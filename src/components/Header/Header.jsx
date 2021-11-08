import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>react contact manager</h1>
            <p className='header__body'>
                Welcome to React Contact Manager!<br />
                Here you can create-delete-rename-watch your contacts!<br />
                Simple app to manage contacts
            </p>
        </div>
    );
};

export default Header;