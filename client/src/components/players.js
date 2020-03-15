import React, {Component} from 'react';
import axios from 'axios';
import {SearchBar} from './searchbar';


//imports
import {PlayerInfo} from './playerInfo';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="Info">
        <div>
          <SearchBar key={this.state.data.id} data={this.state.data}/>
        </div>
        {/* {this.state.data.map(play => (
          <SearchBar key={play.id} data={play.name}/>
        ))} */}
        {this.state.data.map(player => (
          <PlayerInfo key={player.id} data={player} />
        ))}
      </div>
    );
  }
}

export default Players;