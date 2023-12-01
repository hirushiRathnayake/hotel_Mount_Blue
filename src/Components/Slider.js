import Carousel from 'react-bootstrap/Carousel';
import bathRoom from '../Assets/bathRoom.jpg';
import out from '../Assets/out.jpg';
import out2 from '../Assets/out2.jpg';
import room from '../Assets/room.jpg';
import room2 from '../Assets/room2.jpg';
import room3 from '../Assets/room3.jpg';
import '../Styles/Slider.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '75vh' }} >
        <img src={room} text="First slide" className="carousel-img"/>
        <Carousel.Caption>
          <h3>Mount Palace</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '75vh' }}>
      <img src={room2} text="First slide" className="carousel-img" />
        <Carousel.Caption>
          <h3>Points on Plates</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '75vh' }}>
      <img src={room3} text="First slide" className="carousel-img"/>
        <Carousel.Caption>
          <h3>Mount Blue place</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '75vh' }}>
      <img src={out} text="First slide" className="carousel-img" />
        <Carousel.Caption>
          <h3>Rooms & Suites</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '75vh' }}>
      <img src={out2} text="First slide" className="carousel-img"/>
        <Carousel.Caption>
          <h3>Relax Environment</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '75vh' }}>
      <img src={bathRoom} text="First slide" className="carousel-img"/>
        <Carousel.Caption>
          <h3>Clean Bathrooms</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default Slider;