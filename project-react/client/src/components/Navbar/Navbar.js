import "./Navbar.css";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="navlinks">
      <div>
        <div className="sitelogo">MG Metrics</div>
        {Auth.loggedIn() ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/account">My Account</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
