
import './App.css';

// import component pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

import Contact from './pages/Contact'


// import routes using react-router-dom package

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// navbar and footer imported to App.js to be persistent across all pages
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import About from './pages/About';



function App() {
  return (
    <div className='App'>

      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
