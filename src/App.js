
import './App.css';

// import component pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'


// import routes using react-router-dom package

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// navbar and footer imported to App.js to be persistent across all pages
import Navbar from "./components/Navbar";
import Footer from './components/Footer';



function App() {
  return (
    <div className='App'>

      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
