import React from "react";


import "../VideoBackground.css"

const VideoBackground = React.memo(({src}) => {
  return (
    <div style={{position:'absolute', top:'0', width:'98.8vw'}}>
    <picture>
      <source srcSet={`${src}-mobile.gif`} media="(max-width: 650px)"></source>
      <source srcSet={`${src}.gif`}></source>
      <img  srcSet={`${src}.gif`} alt="videobackground" style={{width:'100%', height:'100vh'}}></img>
    </picture>
    </div>
  );
})

export default VideoBackground;
