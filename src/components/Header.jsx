import React from "react";
import "../styles/Header.css";
import { useNavigate , Link} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">Eventra</div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/login">Events</Link></li>
          <li><a href="#">My Events</a></li>
          <li><Link to="/login">About</Link></li>
          <li><Link to="/login">Contact</Link></li>
        </ul>
      </nav>

      <div className="header-right">
        <button
            className="login-btn"
            onClick={() => navigate("/login")}
            >
            Login
        </button>
      </div>
    </header>
  );
};

export default Header;