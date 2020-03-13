import React from 'react'

export const PlayerInfo = (props) => {
    return (
        <div className="Card">  
            <div className="Card-Info">
            <h1><span>⚽</span>{props.data.name}</h1>
            <h2>Country {props.data.country}</h2>
            <h3>Searches: {props.data.searches}</h3>
            <h3>Awesomeness: 1000000!!!</h3> 
            </div>
        </div>
    )
}
