// import React from "react";
// import { Link } from "react-router-dom";
import { Text } from "react-native";

// import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    // Auth.logout();
  };
  return (
    <Text>This is the header</Text>
    // <header className="">
    //   <div className="">
    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link className="" to="/account">
    //             View My Account
    //           </Link>
    //           <button className="" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="" to="/login">
    //             Login
    //           </Link>
    //           <Link className="" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
