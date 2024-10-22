// import React from 'react'
// import "./styles/Navigation.style.css"
// import { NavLink } from 'react-router-dom';
// const Navigation = () => {
//   // const setActive = ({ isActive }) =>
//   //   isActive ? "li-effect" : "li-effect";
//   return (
//     <div className='Nav'>
//    <div className="image">
//             <img src=''/>
//         </div>
//         <div className='navlinks'>
//             <ul>
//                 <div className='li-effect'>
//                 <NavLink className={"uscore"} to="/">Home</NavLink>
//                 </div>
//                 {/* <div className='li-effect'>
//                 <li>Events</li>
//                 <span></span>
//                 </div> */}
//                 <div className='li-effect'>
//                 <NavLink className={"uscore"} to="/esummit">ESummit'23</NavLink>
//                 </div>
//                 <div className='li-effect'>
//                 <NavLink className={"uscore"} to="/archives">Archives</NavLink>
//                 </div>
//                <div className='li-effect'>
//                <NavLink className={"uscore"} to="/ourteam">Battalion</NavLink>
//                </div>
//                 <div className='li-effect'>
//                 <NavLink className={"uscore"} to="/contact">Contact</NavLink>
//                 </div>
//                 <div className={"button"}> 
//                   <NavLink className={"uscore-b"} to={"https://linktr.ee/ecell.medicaps"} >Register</NavLink>
//                 </div>
//             </ul>
//         </div>
//     </div>
       
    
//   );
// }

// export default Navigation


import React, { useState } from 'react';
import './styles/Navigation.style.css';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="Nav">
      {/* Hamburger menu for small screens */}
      <div className="hamburger" onClick={toggleSidebar}>
        <FiMenu size={30} />
      </div>

      {/* Navigation links */}
      <div className="navlinks">
        <ul>
          <div className="li-effect">
            <NavLink className={"uscore"} to="/">Home</NavLink>
          </div>
          <div className="li-effect">
            <NavLink className={"uscore"} to="/esummit">ESummit'23</NavLink>
          </div>
          <div className="li-effect">
            <NavLink className={"uscore"} to="/archives">Archives</NavLink>
          </div>
          <div className="li-effect">
            <NavLink className={"uscore"} to="/ourteam">Battalion</NavLink>
          </div>
          <div className="li-effect">
            <NavLink className={"uscore"} to="/contact">Contact</NavLink>
          </div>
          <div className="button ">
            <NavLink className={"uscore-b r"} to={"https://linktr.ee/ecell.medicaps"}>Register</NavLink>
          </div>
        </ul>
      </div>

      {/* Sidebar for small screens */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleSidebar}>
          <FiX size={30} />
        </div>
        <ul>
          <li><NavLink to="/" onClick={toggleSidebar}>Home</NavLink></li>
          <li><NavLink to="/esummit" onClick={toggleSidebar}>ESummit'23</NavLink></li>
          <li><NavLink to="/archives" onClick={toggleSidebar}>Archives</NavLink></li>
          <li><NavLink to="/ourteam" onClick={toggleSidebar}>Battalion</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink></li>
          <li><NavLink to="https://linktr.ee/ecell.medicaps" onClick={toggleSidebar}>Register</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

