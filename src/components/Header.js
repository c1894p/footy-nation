import React from 'react';
import { Link } from 'react-router-dom'

export const Header = ({data}) => {
    return (
        <div>
            <h1>Footy Nation</h1>
            <h3>Highlights from the most recent futbol games!</h3>
            <nav className="nav-container">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>


        </div>
    )
}