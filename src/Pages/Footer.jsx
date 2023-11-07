import React from 'react'
import './Main.css'
import '@formspree/react';
function Footer() {
  return (
    <div className='m-0 p-0'>
      <div className="center-position text-center">
        <h2 className='text-light footer-heading'>Receive the latest updates on how to protect trails. <br />
          Subscribe to the monthly edition of Paperless Trails.</h2>

        <form action="https://formspree.io/f/xwkdydrp" method="POST" className='forms mt-5'>
          <input type="text" placeholder='Name' className='input-1' required /><br />

          <input type="email" placeholder='Email Address' className='input-1' id="email" name='email'/>

          <button type="submit" className='btn btn-primary m-0 p-3 mt-5 subscribe-btn'>Subscribe</button>

        </form>
        <div className="footer-address">
          <ul className='contact_us mb-5'>CONTACT US
            <li><a href="q" className='nav-link hover-underline-animation'>Muncak hiking society</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>8605 Second Ave.</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>Silver Spring, MD 20910</a></li><br />
            <li><a href="q" className='nav-link hover-underline-animation'>Info@muncak.org</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>1-301-565-6704 (Main)</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>1-800-972-8608 (Toll-free)</a></li>
          </ul>

          <ul className='abt-us'>ABOUT US
            <li><a href="q" className='nav-link hover-underline-animation'>Our Mission</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>Our Team</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>Corporate Sponsors</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>Financials</a></li>
            <li><a href="q" className='nav-link hover-underline-animation'>Media Center</a></li>
          </ul>
          <ul className='our-program'>OUR PROGRAMS
          <li><a href="q" className='nav-link hover-underline-animation'>Hike The Hill</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Volunteer Vacations</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Alternative Break</a></li>
          </ul>
          <ul className='sup-tra'>SUPPORT TRAILS
          <li><a href="q" className='nav-link hover-underline-animation'>Donate</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Individual Membership</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Gift membership</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Hiker Store</a></li>
          </ul>
          <ul className='hiking-resource'>HIKING RESOURCES
          <li><a href="q" className='nav-link hover-underline-animation'>Hikes Near You</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Hiking 101</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Muncak Blog</a></li>
          <li><a href="q" className='nav-link hover-underline-animation'>Hiking Organizations</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer