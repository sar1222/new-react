import React, { Component, PropTypes } from 'react'

function Footer () {


  
    return (
      <div className='#90caf9 #39445a'>
                   <button >Extra</button>
         <footer className="#90caf9 #39445a">
          <div className="container color">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text color">Footer Content</h5>
                <p className=" color   ">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="color">
                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {
                new Date().getFullYear()
            } By Umarov Sardorbek
            
            </div>
          </div>
        </footer>

      </div>
    )
  
}


export default Footer