import React from 'react';
import NavDropdown from './dropDown';
import Destination from '../Assets/Destination.jpg';
import MyCard from './Card';
import '../Styles/OurDestinations.css';

function OurDestinations() {
  return (
    <div className='destination-container'>
      <h1>Our Destinations</h1>
      <div className='drop'>
        <NavDropdown Bname="Mount Blue - Galkissa" sub1="Mount Blue - Dehiwala" sub2="Mount Blue - kandy"/>
      </div>
      <div className='destination-image'>
        <img src={Destination} alt="Destination"/>
        <div className='content-wrapper'>
          <MyCard Cname="Mount Blue Life" cDescription="Situated in the heart of the hill country mount blue is the perfect gateway for your much planned holiday. Experience the tranquility of mother nature with spectacular views you won't find anywhere else! Our highly trained friendly qualified staff provides you with personalized service." cButton="Discover More"/>
        </div>
      </div>
    </div>
  );
}

export default OurDestinations;
