import './Components/NavBar.jsx'
import './Components/HomePage.jsx'
import NavBar from './Components/NavBar.jsx';
import HomePage from './Components/HomePage.jsx';
import MyAdvantages from './Components/MyAdvantages.jsx';
import CursorFollower from './Components/CursorFollower.jsx';
function App() {
  return (
    
    <div className="App">
      <CursorFollower></CursorFollower>
     <NavBar></NavBar>
     <HomePage></HomePage>
     <MyAdvantages></MyAdvantages>
    </div>
   
  );
}

export default App;
