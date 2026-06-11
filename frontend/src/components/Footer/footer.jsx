//import useState from 'react'
import './footer.css'


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>InterviewPrep</h3>
          <p>
            Helping students improve coding, software engineering,
            and interview skills through structured learning and practice.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Quiz</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>DSA Practice</li>
            <li>OOP Concepts</li>
            <li>System Design</li>
            <li>Interview Tips</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@interviewprep.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Interview Preparation Platform. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;