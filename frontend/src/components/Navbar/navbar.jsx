//import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'; 


function Navbar() {
    return (
        <nav className='navbar'>
            <h2 className='logo'>InterviewPrep</h2>
            <ul className='navLinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/questions">Questions</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="auth-buttons">
                <Link to="/register" className='btn1'>Sign Up</Link>
                <Link to="/login" className='btn2'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;
