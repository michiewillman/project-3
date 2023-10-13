import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";
import { SecondaryButton } from "../../components/Button/Button";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="" to="/account">
                View My Account
              </Link>
              <SecondaryButton text="Submit" action={logout} />
            </>
          ) : (
            <>
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
