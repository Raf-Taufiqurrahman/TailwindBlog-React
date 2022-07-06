import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Hero/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
