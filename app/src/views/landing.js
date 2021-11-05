

// import React, { useState, useEffect } from 'react';

import './static/css/landing.css';


function MainTitle(props){
  

  return(
    <div id='mainTitle'>
    {props.title.split('').map(function(item, i){
          return <p className={`letter ${i%2==0? 'odd' : 'even'}`}>{item}</p>;
      })
    }

    </div>
    
  )
}





function Landing(){
  return(
    <div id='landing'>
      <MainTitle title='COWORKING'/>
    </div>
  )
}


export default Landing;
