import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Locations from "./Routes/Locations";
import Home from "./Routes/Home";
import Characters from "./Routes/Characters";



function App(){

  return(
      <Router>
        <div className="App">
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/locations" element={<Locations />}/>
        </Routes>
      </Router>
  )
}


export default App;

