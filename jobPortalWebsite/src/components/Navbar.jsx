  // components/Navbar.js


import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">UFoundIT</div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#job-seekers">For Job Seekers</a></li>
        <li><a href="#companies">For Companies</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
