import React from 'react'
import ReactPlayer from 'react-player';

const divStyle ={
    // marginLeft: "33%",
    // marginTop: '1%',
    // display: 'flex'
    marginTop: '-1%'
}

export const Highlights = () => {
  return (
    <>
      <div className="Highlight-Header">
        <h1>Soccer Highlights</h1>
      </div>
      <div className="Videos">
        <div className="Video">
          <ReactPlayer
            style={divStyle}
            url="https://www.youtube.com/watch?v=JLmH0igMZGk"
            playing
          />
        </div>
        <div className="Video">
          <ReactPlayer
            style={divStyle}
            url="https://www.youtube.com/watch?v=g1zI3-YXv4A"
            playing={false}
          />
        </div>
        <div className="Video">
          <ReactPlayer
            style={divStyle}
            url="https://www.youtube.com/watch?v=-PW2XSKZaT0"
            playing={false}
          />
        </div>
        <div className="Video">
          <ReactPlayer
            style={divStyle}
            url="https://www.youtube.com/watch?v=TY4TM7dV1YU"
            playing={false}
          />
        </div>
        <div className="Video">
          <ReactPlayer
            style={divStyle}
            url="https://www.youtube.com/watch?v=xiWSqHhyCDA"
            playing={false}
          />
        </div>
      </div>
    </>
  );
};
