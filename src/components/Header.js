import React from 'react';
import { Link } from 'react-router-dom'

export const Header = ({data}) => {
    return (
        <div>
            <h1 className="head">Footy Nation</h1>
            <h3 className="sub-head">Highlights from the most recent fútbol games!</h3>
            <nav className="nav-container">
                <Link className="nav home" to="/">Home</Link>
                <Link className="nav about"to="/about">About</Link>
            </nav>


        </div>
    )
}