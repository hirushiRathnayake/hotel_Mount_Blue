import './App.css';
import Slider from './Components/Slider';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import OurDestinations from './Components/OurDestinations';
import Experience from './Components/Experience';
import Offers from './Components/Offers';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Slider/>
      <br/>
      <br/>
      <OurDestinations/>
      <br/>
      <Experience/>
      <br/>
      <Offers/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
