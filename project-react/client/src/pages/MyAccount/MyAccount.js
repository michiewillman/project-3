import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import "./MyAccount.css";
// import firstToUppercase from "../../utils/firstToUppercase";

const MyAccount = () => {
  // Get logged in user's data
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });
  const user = data?.me || data?.user || {};

  // const displayMeds = firstToUppercase(user.medications);

  return (
    <div className="container">
      <h2>Account Information</h2>
      <p className="accountDetail">
        <strong>First name:</strong> {user.firstName}
      </p>
      <p className="accountDetail">
        <strong>Last name:</strong> {user.lastName}
      </p>
      <p className="accountDetail">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="accountDetail">
        <strong>Medications:</strong> {user.medications?.join(", ")}
      </p>
      <p className="accountDetail">
        <strong>Reported symptoms:</strong> {user.symptoms?.join(", ")}
      </p>
    </div>
  );
};

export default MyAccount;
