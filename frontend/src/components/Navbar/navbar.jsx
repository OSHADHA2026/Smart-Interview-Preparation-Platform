//import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'; 
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AppRoutes';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    // Check if token exists and set user state
    if (token && !user) {
        setUser(token); // You can decode the token to get user info if needed
    }

    const handleLogout = () => {
        // Clear user data and token from local storage
        logout();
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className='navbar'>
            <h2 className='logo'>InterviewPrep</h2>
            <ul className='navLinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/questions">Questions</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                {user ? (<li><Link to="/dashboard">Dashboard</Link></li>):""}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {user ? (
                <div className="auth-buttons">
                    <Link to="/profile" className='btn1'>Profile</Link>
                    <button className='btn2' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="auth-buttons">
                    <Link to="/register" className='btn1'>Sign Up</Link>
                    <Link to="/login" className='btn2'>Login</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
