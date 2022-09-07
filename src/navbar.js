import React, { Component, PropTypes } from 'react'
// import movie from './film-slate.png'
import camera from  './camera.png'
function Navbar () { 


    return (
      <div className='#39445a'>
      
    <div className="contaniner extra">
        <img className='camera' src={camera} alt="kcesjr" />
          <a href="#" className="logo">The Best Entertaininig Movies and Series</a>
       <img className='camera' src={camera} alt="dsd" /> 
        <ul id="btnMain nav-mobile" className="right hide-on-med-and-down">
          
        {/* <button className='btn1'> Series</button> */}
     
      </ul>
      
    </div>
    
  
      </div>
    )
  
}

export default Navbar