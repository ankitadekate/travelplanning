import logo from './logo.svg';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trip from './components/Trip';
import Review from './components/Review';
import About from './components/About';
import Contact from './components/Contact';
import DemoNavbar from './components/DemoNavbar';
import TripDetails from './components/TripDetails';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DemoNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tripDetails" element={<TripDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
