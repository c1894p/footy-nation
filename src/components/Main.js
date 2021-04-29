import React from 'react';
import { Link } from 'react-router-dom'

export const Main = ({data}) => {

    return (
        <div className="container">
           {data.map(d => {
            return(
                <div className="data-container"key={d.title}>
                    <Link className="match-title" to={`/${d.title}`}>{d.title}</Link>
                    <p className="img-container"><img src={d.thumbnail} alt="/" className="poster"/></p>
                </div>
            )
           })}
        </div>
    )
}