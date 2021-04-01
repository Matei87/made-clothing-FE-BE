import React from 'react';
import './header.scss';

const Header = ({ Bags }) => {

    return (
        <header>
            <div className="image-container">
                <img src={Bags} alt="bags" />
            </div>
        </header>
    );
}

export default Header;