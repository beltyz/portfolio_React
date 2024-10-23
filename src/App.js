import './Components/NavBar.jsx'
import './Components/HomePage.jsx'
import NavBar from './Components/NavBar.jsx';
import HomePage from './Components/HomePage.jsx';
import MyAdvantages from './Components/MyAdvantages.jsx';
import CursorFollower from './Components/CursorFollower.jsx';
import {ImageSlider} from './Components/ImageSlider.jsx'
import slidesData from "./data/carouselData.json";
import Footer from './footer/footer.jsx';

function App() {
  return (
    
    <div className="App">
      <CursorFollower></CursorFollower>
     <NavBar></NavBar>
     <HomePage></HomePage>
     <MyAdvantages></MyAdvantages>
     <ImageSlider data={slidesData.slides} />
     <Footer></Footer> 
    </div>
   
  );
}

export default App;
