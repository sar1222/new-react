import React, { Component, PropTypes } from 'react'
import youtube from './youtube.png'
import { Loading } from './loading'
function Content (props) {
  const {posts} = props
  if(!posts.length){
    return <Loading/>
  }else{
    return (
      
         <div className=" row2 contents #39445a">
              {props.posts && props.posts.map((item, idx)=>{
               return(
                        
                 <div>
                    <div className="row"key={idx}>
                         <div className=" font col s12 m7">
                           <div className="card">
                             <div  className="card-image">
                               <img  src={item.Poster} alt={item.Type}  />
                               <span className="card-title">{item.Title}</span>
                             </div>
                             <div >
                               <p className='type'>{item.Type }  {item.Year} </p><hr/>
                               <p>
                                <a target={"_blanck"} href={`https://www.youtube.com/results?search_query=${item.Title}`}> 
                              
                                <img className='youtube' src={youtube} alt="" /></a> </p>
                             </div>
                             <div > 
                               
                             </div>
                        </div>
                           </div>
             
                      </div>

                      </div>
               
                      
  
               )
              
             
              })}
         </div>
      
    )

  }

  }

   export default Content
   