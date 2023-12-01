import React from 'react';
import '../Styles/card1.css';

function MyCard2({ cImg, Cname }) {
  return (
    <div className='card'>
      <img src={cImg} alt={Cname} className="card-image" />
      <div className="overlay-text">
        <h2>{Cname}</h2>
      </div>
    </div>
  );
}

export default MyCard2;

