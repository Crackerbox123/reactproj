import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

// import the hamburger menu and social icons
import ReorderIcon from '@mui/icons-material/Reorder';

//import navbar CSS

import "../styles/Navbar.css";

function Navbar() {
  // logic to determain if screensize triggers ReorderIcon logic
    const [expandNavbar, setExpandNavbar] = useState(false);

    // react dom hook to determine where user is
    const location = useLocation();

    
    useEffect(() => {
      setExpandNavbar(false);
    }, [location]);


  return (
    // open if expandNavbar is true, and close if expandNavbar is false
    <div className='navbar' id={expandNavbar ? "open" : "close"}>Navbar
        <div className='toggleButton'>
          <button onClick={() => {
            setExpandNavbar((prev) => !prev);
           }}
           >

            <ReorderIcon />
           </button>                     
           
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>

            
        </div>
    </div>
  )
}

export default Navbar;