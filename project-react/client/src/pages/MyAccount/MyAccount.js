import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
// User authentication
import Auth from "../../utils/auth";
import Medication from "../../components/Medication/Medication";

const MyAccount = () => {
  const { userId } = useParams();

  // Execute the `QUERY_ME` query for the logged in user's data
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user = data?.me || data?.user || {};

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
      <h2>
        {userId ? `${user.name}'s` : "Your"} friends have endorsed these
        skills...
      </h2>

      {user.skills?.length > 0 && (
        <Medication
          medLogs={user.medications}
          isLoggedInUser={!userId && true}
        />
      )}
    </div>
  );
};

export default MyAccount;
