import React, { useState, useEffect } from "react"; 
import "./Navbar.scss"; 
import { NavLink, useNavigate } from "react-router-dom"; 
import Modal from "../Modal/Modal";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => { 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => { 
    const savedUser = JSON.parse(localStorage.getItem("user")); 
    if (savedUser) setUser(savedUser); 
  }, []);

  const handleLogout = () => { 
    localStorage.removeItem("user"); 
    setUser(null);  
    navigate("/"); 
  };

  return ( 
    <div className="mainConatinerOfNav">
      {/* Logo */}
      <div className="logoSide"> 
        <p className="logoName">Insight</p> 
      </div>

      {/*  Logout in navbar */}
      <div className="contentSide"> 
        <button onClick={handleLogout}>Logout</button> 
      </div> 

      {/*  Resume Templates  */}
      <NavLink to="/resume-templates" className="templates resume-fixed">
        Resume Templates
      </NavLink>

      {/*  Profile icon (fixed top-right) */}
      <FaUserCircle 
        className="profile-icon" 
        onClick={() => setIsModalOpen(true)} 
      />

      {/*  Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
        <h2>Profile</h2> 
        <p><strong>Name:</strong> {user?.name}</p> 
        <p><strong>Email:</strong> {user?.email}</p> 
      </Modal>
    </div>
  ); 
};

export default Navbar;



