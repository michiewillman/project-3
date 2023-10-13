import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
// User authentication
import Auth from "../../utils/auth";
// Global styles
import { themeStyles } from "../../themeStyles";
import { PrimaryButton } from "../../components/Button/Button";

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
    return (
      <div>
        <h4 style={themeStyles.headline}>Signup or login.</h4>
        <Link to="/login">
          <PrimaryButton text="Login" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p themeStyles>Information on file</p>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Medications {user.medications}</p>
      <p>Reported symptoms {user.symptoms}</p>
    </div>
  );
};

export default MyAccount;
