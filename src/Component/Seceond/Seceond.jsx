import React from 'react';
import"./Seceond.css";

const Seceond = () => {
  return (
    <>
      <div className="container">

        <h1 >Shortlist</h1>
        <p>Details<span>:</span></p>
        <div className="container2">
            <div>
            <p className="event">Event Date</p>
            <p className="event2">2023-5-28</p>
            </div>
        
        <div >
            <p className="main">Location</p>
            <p className="main2">Delhi,India</p>
        </div>
        <div className="price">
            <p className='Budget'>Budget</p>
            <div className="price__tag">
                <p className="money">₹900,000</p>
            </div>
        </div>
      </div>
      </div>
      <center>
      <h1 className="singer">Singers</h1>
        <p className="para">Select an artist that matches your vibe.</p>
      </center>
    </>
  )
}

export default Seceond;
