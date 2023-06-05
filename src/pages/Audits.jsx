import React, { useState } from 'react';
import MainCarousel from '../components/MainCarousel';
import SelectionCarousel from '../components/SelectionCarousel';

const Audits = () => {

  return (
    <div className = "mainAudits">
      <div className="audits-container">
        <h5>lorem ipsum dolor</h5>
      <MainCarousel />
      <SelectionCarousel />
    </div>
    <div class="container-calendar">
  <div class="time-slots">
    <h2>Choose Time Slot</h2>
    <ul class="time-slot-list">
      <li>9:00 AM - 10:00 AM</li>
      <li>10:00 AM - 11:00 AM</li>
      <li>11:00 AM - 12:00 PM</li>
      <li>12:00 PM - 1:00 PM</li>
      <li>1:00 PM - 2:00 PM</li>
      <li>2:00 PM - 3:00 PM</li>
      <li>3:00 PM - 4:00 PM</li>
    </ul>
  </div>
  <div class="notes">
    <h2>Take Notes</h2>
    <textarea placeholder="Enter your notes here"></textarea>
    <button class="send-btn">Send</button>
  </div>
</div>

<div class="updates-container">
  <div class="update-box">
    <h3>Latest Updates</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="read-more">Read more</a>
  </div>
  <div class="news-box">
    <h3>News</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="read-more">Read more</a>
  </div>
  <div class="events-box">
    <h3>Events</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="read-more">Read more</a>
  </div>
  <div class="updates-box">
    <h3>Product Updates</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="read-more">Read more</a>
  </div>
</div>

    </div>
  );
};




// return (
//   <div className = "mainAudits">
//     <div className="audits-container">
//       <h5>lorem ipsum dolor</h5>
//     <MainCarousel />
//     <SelectionCarousel />
//   </div>
//    <div className='auditsSecond'>
//    <h5>Lorem, ipsum dolor.</h5>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero!</p>
//    </div>
//   </div>
// );
// };

export default Audits;
 