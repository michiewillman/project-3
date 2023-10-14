import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
// User authentication
import Auth from "../../utils/auth";
import "./MyAccount.css";

const MyAccount = () => {
  // Get logged in user's data
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });
  const user = data?.me || data?.user || {};

  return (
    <div className="container">
      <h2>Account Information</h2>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Medications: {user.medications}</p>
      <p>Reported symptoms: {user.symptoms}</p>
    </div>
  );
};

export default MyAccount;
