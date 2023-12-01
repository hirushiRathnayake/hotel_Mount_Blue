import React from 'react';
import MyCard2 from './Card1';
import ex1 from '../Assets/ex1.jpg';
import ex2 from '../Assets/ex2.jpg';
import ex3 from '../Assets/ex3.jpg';
import ex4 from '../Assets/ex4.jpg';
import ex5 from '../Assets/ex5.jpg';
import ex6 from '../Assets/ex6.jpg';
import '../Styles/Experience.css';

function Experience() {
  return (
    <div>
      <h1>Experience Something New</h1>
      <p>Embrace the spirit of the season. Discover our recommendations for winter wonderland getaways or craft your own enchanting escape. Embrace the joy of staying and create unforgettable holiday memories.</p>
      <div className='card-container'>
        <MyCard2 cImg={ex1}  Cname="Enjoy your life"/>
        <MyCard2 cImg={ex2} Cname="Get Away & Save More" />
        <MyCard2 cImg={ex3} Cname="A Night On Us" />
        <MyCard2 cImg={ex4} Cname="A Day On Us" />
        <MyCard2 cImg={ex5} Cname="Boat Experience" />
        <MyCard2 cImg={ex6} Cname="Peaceful place for love" />
      </div>
    </div>
  );
}

export default Experience;