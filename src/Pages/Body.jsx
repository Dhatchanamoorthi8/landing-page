import React from 'react'
import './Main.css'

function Body() {
  return (
   
    <div className='body-sec p-0 m-0'>
       
      <h2 className='text-center'>We envision a world  where everyone <br />
        has permanent access to a hiking trail</h2>

      <div className="row m-0 g-5 ">
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 m-0">
          <div className="icon-1">
            <img src={require("../img/11.png")} alt="icon" className='img-size' />
          </div>
          <div className="card col-12 col-lg-9 card-1 mt-0 border-0">
            <div className="card-body p-5">
              <p className='heading m-0'>Advocate</p><br />
              We work with Congress, Federal agencies, and partners on policy issues and legislation to ensure funding for trails, preservation of natural areas, and protection of the hiking experience.
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 col-md-6 col-sm-12 m-0 right-side">
          <div className="icon-2">
            <img src={require("../img/22.png")} alt="icon" className='img-size-2' />
          </div>
          <div className="card col-12 col-lg-9 card-2 mt-0 border-0">
            <div className="card-body p-5">
              <p className='heading m-0'>Volunteer </p><br />
              Trails don't maintain themselves. Individuals of any age and experience level can become trail stewards. Give back to the trails you love, meet new people, and enjoy the experience!
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 g-5">
      <div className="col-12 col-lg-6 col-md-6 col-sm-12 m-0">
          <div className="icon-1">
            <img src={require("../img/33.png")} alt="icon" className='img-size-3' />
          </div>
          <div className="card col-12 col-lg-9 card-1 mt-0 border-0">
            <div className="card-body p-5">
              <p className='heading m-0'>Explore</p><br />
              Feel confident when you set out on your next trail adventure. Check out our free hiking resources like tips for hiking with families, gear checklists, finding the best trail for you.
            </div>
          </div>
        </div>
        <div className="col-6 bg-img-right text-center ">
          <button type="button" className='btn btn-outline-primary  w-25 rounded-5 '>Learn More</button>
        </div>
      </div>

      <div className="center mt-5 mb-5 pb-5">

        <h2>
        With the support of our members,  and partners, we've <br /> improved trail access for millions of people
        </h2>

        <ul>
          <li>We've Moblized
          <p className='fs-3 m-0 count'>555,785</p>
          Trail Voluntrees
          </li>
          <li>We've Facilitated
            <p className='fs-3 m-0 count'>41,146</p>
            Miles of Trail Maintenance & <br /> Construction
          </li>
          <li>Volunteers Have Contributed
            <p className='fs-3 m-0 count'>$108 Million</p>
            in Volunteer Labor
          </li>
        </ul>

      </div>

      <h2 className='mb-5'> 
      Protecting Trails: Current News and Issues
      </h2>
      <div className="row m-0 mb-5 pb-5">
        <div className="col-12 d-lg-flex gap-5 align-items-center justify-content-center bg-left">
          <div className="card col-lg-3 col-12 border-0 card-2 h-lg-100">
            <div className="card-body">
              <img src={require("../img/1-img.png")} alt="" className='card-img  rounded-top-4' />
              <h3 className="fs-5">2,802 Miles of Trail to be Improved on International Trails Day</h3>
              <p className="para-hight p-0 m-0">On June 2, 2018, people across the worldwill come together to collectively improve 2,802 miles of trail—the distance across the world—during International  Trails Day. Muncak invites hikers, cyclists,…</p>
            <p className='read-more'>Read More</p>
            </div>
          </div>
          <div className="card col-lg-3 col-12 border-0 card-2 h-lg-100">
            <div className="card-body">
            <img src={require("../img/2-img.png")} alt="" className='card-img rounded-top-4' />
              <h3 className="fs-5">Four Ways to Celebrate International Trails Day on a Bicycle</h3>
              <p className="para-hight p-0 m-0">There are many ways to celebrate the International Trails Day on June 2. It’s even possible to participate on a bicycle. And if you go on a bike overnight trip during International</p>
              <p className='read-more'>Read More</p>
            </div>
          </div>
          <div className="card col-lg-3 col-12 border-0 card-2 h-lg-100">
            <div className="card-body">
            <img src={require("../img/3-img.png")} alt="" className='card-img rounded-top-4' />
              <h3 className="fs-5">Millennials are the Future of our Trails</h3>
              <p className="fs-6">The smell of fresh dew is a welcome scent, as the crunch of my boots melds with the sound of the birds singing their morning song. It’s early and I am wearing layers, but it won’t be long until they are peeled away to adapt to the summer…</p>
              <p className='read-more'>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body