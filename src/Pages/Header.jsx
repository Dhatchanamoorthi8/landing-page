import React from 'react'
import './Main.css'
function Header() {
  return (
    <div className='header'>
      {/* NAV BAR START */}
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand mt-3" href="logo">
            <img src={require('../img/logo.png')} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto mt-4 me-5 nav-list">
              <a class="nav-link p-4" aria-current="page" href="Home">Home</a>
              <a class="nav-link p-4" href="Go Hiking">Go Hiking</a>
              <a class="nav-link p-4" href="About">About</a>
              <button class="btn btn-light ms-lg-0 ms-2" href='login'>Login</button>
            </div>
          </div>
        </div>
      </nav>

      {/* NAV BAR END*/}
      {/* Center Content Start */}
      <div className="center-content">
        <h2 className='head-txt'>Let’s get the top 
          <br></br>of Mountain</h2>
          <div className="side-img">
          <p className='para-txt pt-3'>Here is the hiking information you need to decide <br></br>
             if it is right for you, and to make it more interesting,<br></br>
             enjoyable, and safe.
          </p>
          <button type="button" className='btn btn-primary  mt-lg-5 mt-3'>Get Started</button>
      </div>
      {/* Center Content End */}
    
     </div>
      
    </div>
  )
}

export default Header
