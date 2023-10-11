import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
// User authentication
import Auth from "../../utils/auth";
// Use global User context
// import { useUserContext } from "../utils/ThemeContext";

const MyAccount = () => {
  // Get logged in user's data
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });
  const user = data?.me || data?.user || {};

  // If the user is logged in and authenticated, continue to account page
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/account" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return <h4>Signup or login.</h4>;
  }

  return (
    <div>
      <p>First name</p>
      <p>Last name</p>
      <p>Email</p>
      <p>Medications</p>
    </div>
  );
};

export default MyAccount;
