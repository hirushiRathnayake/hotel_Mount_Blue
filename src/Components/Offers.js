// Offers.js

import React from 'react';
import MyCard from './Card';
import ex1 from '../Assets/ex1.jpg';
import ex2 from '../Assets/ex2.jpg';
import ex3 from '../Assets/ex3.jpg';
import "../Styles/Offers.css";

function Offers() {
  return (
    <div className="offers-container">
      <h1>Offers</h1>
      <br/>
      <br/>
      <div className="card-row">
        <MyCard cImg={ex1} Cname="Rooms & Suites" cDescription="Mount-Blue Circle Exclusive Member Rate with Breakfast." cDescription1="Exclusive Member Rate with Breakfast for Shangri-La Circle member." cDescription2="From AUD 272.05 Average Per Night" cButton="View Details"/>
        <MyCard cImg={ex2} Cname="Rooms & Suites" cDescription="Mount-Blue Circle Exclusive Member Rate with Breakfast." cDescription1="Exclusive Member Rate with Breakfast for Shangri-La Circle member." cDescription2="From AUD 272.05 Average Per Night" cButton="View Details"/>
        <MyCard cImg={ex3} Cname="Weddings" cDescription="Mount-Blue Circle Exclusive Member Rate with Breakfast." cDescription1="Exclusive Member Rate with Breakfast for Shangri-La Circle member." cDescription2="From AUD 272.05 Average Per Night" cButton="View Details"/>
      </div>
      <br/>
      <div>
        <a href='https://www.shangri-la.com/'>View more</a>
      </div>
    </div>
  );
}

export default Offers;
