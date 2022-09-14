import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details/:id' element={<Details/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
