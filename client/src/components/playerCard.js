import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useAxios} from '../hooks/useAxios';
import {NavLink} from 'react-router-dom';

export const PlayerCard = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data] = useAxios(`http://localhost:5000/api/players`);

  const goHome = e => {
    history.push("/");
  };
  return (
    <div>
      <div>
      <h1>List Below</h1>
        <button onClick={goHome}>Players</button>
      </div>
      {data.map(ind => (
          
        <div className="I-Card">
          <div className="I-Card-Info">
            <h1><span>💪</span>{ind.name}</h1>
            <h2>Country {ind.country}</h2>
            <h3>Searches: {ind.searches}</h3>
            <h3>Awesomeness: 1000000!!!</h3>
          </div>
        </div>
        
      ))}
    </div>
  );
};
