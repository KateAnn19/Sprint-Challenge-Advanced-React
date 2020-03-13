import React from 'react';
import {NavLink} from 'react-router-dom';

export const PlayerInfo = ({data}) => {
    return (
        <div className="Card"> 
        
            <div className="Card-Info">
            <NavLink className="Individual" to={`/players/${data.id}`}>
            <h1><span>⚽</span>{data.name}</h1>
            </NavLink>
            {/* <h2>Country {data.country}</h2>
            <h3>Searches: {data.searches}</h3> */}
            <h3>Awesomeness: 1,000,000!!!</h3> 
            </div>
        </div>
    )
}
