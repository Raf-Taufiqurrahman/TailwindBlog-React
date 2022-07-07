import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Hero/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Testimonial/>
      </Router>
    </div>
  );
}

export default App;
