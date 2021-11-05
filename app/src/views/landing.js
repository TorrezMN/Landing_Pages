

// import React, { useState, useEffect } from 'react';

import './static/css/landing.css';


function MainTitle(props){
  return(
    <div id='mainTitle'>
    {props.title.split('').map(function(item, i){
          return <p className={`
            letter 
            ${i%2===0? 'odd' : 'even'} 
            ${i%2===0? 'odd' : 'even'} 
            ${Math.random()*10>5? 'left' : 'right'}
            `}
          key={`${Math.random()}`}
          >{item}</p>;
      })
    }

    </div>
    
  )
}





function Landing(){
  return(
    <div id='home'>
      <MainTitle title='COWORKING'/>
      <div id='buttons'>
        <a href='#services'>Services</a>
      </div>
    </div>
  )
}


export default Landing;
