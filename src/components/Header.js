import React from 'react';
import './Header.css'; 


/**
 * Header component for Houses Bits.
 * Shows the title and subtitle passed via props.
 *
 * @param {Object} props
 * @param {string} props.title    - Main heading text
 * @param {string} props.subtitle - Subheading or tagline
 */
function Header({ title, subtitle }) {
    return (
        <header className="header-container">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header;