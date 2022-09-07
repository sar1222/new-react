 // import React, { Component, PropTypes } from 'react'
import React, {useState} from 'react';
function Navbar2(props) {
const{posts } =props
const[search, setsearch]= useState('speed')
const[Year, setYear]= useState(2008)
function showSearch(){
  props.getSearch(search)

}
function getFilmes(type){
  props.getFilterItem(search,type)
  
}
function getYear2(type, Year) {
  props.getYear(search, type , Year)
  
}



return (
  <div className='#90caf9 #39445a'>
        <div className='search '>
            <input
             type="text" 
             className='form-control' 
              placeholder='Searching........'
              value={search}
              onChange={(s)=>{setsearch(s.target.value)}}/>
          <button className='series btn btn-pirarmiy' onClick={()=>getFilmes('series' )}>Series</button>

             
            <button id='serBtn' 
            className=' search23 btn btn btn-primary'onClick={showSearch }>Searching...<img className='search2' src="./search.png" alt="" /></button>

        <button className='movies btn btn-pirarmiy' onClick={(s)=>getFilmes('movie')} >Movies</button>
        <button className='game btn btn-pirarmiy' onClick={(s)=>getFilmes('game')} >Game</button>
             <input
             className='Year'
              type="number" 
              placeholder='Enter Year'
              value={ Year}
              onChange={(s)=>{setYear(s.target.value)}}
              
              
              />
               <button id='serBtn' 
            className=' search23 btn btn btn-primary'onClick={getYear2  }>Searching...<img className='search2' src="./search.png" alt="" /></button>


      
     
       
         </div>
      </div> 
    )
  
}

      
export default Navbar2