import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import "./MyAccount.css";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const MyAccount = () => {
  // Get logged in user's data
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userId },
  });
  const user = data?.me || data?.user || {};
  // Pull out medications arary for mapping
  const userMeds = user?.medications || [];
  // Pull out symptoms array for mapping
  const userSymptoms = user?.symptoms || [];

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
      <div className="accountDetail">
        <p>
          <strong>Medications:</strong>
        </p>
        {userMeds.length ? (
          <div className="userMedsList">
            {/* Render a log card for each item in the medicines array */}
            {userMeds.map((med, index) => (
              <div key={med + index} className="userMedBadge">
                <p>{med}</p>
                <button>
                  <HighlightOffOutlinedIcon className="delBadge" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No medications added</p>
        )}
      </div>
      {/* User Symptoms */}
      <div className="accountDetail">
        <p>
          <strong>Symptoms:</strong>
        </p>
        {userSymptoms.length ? (
          <div className="userSymptomsList">
            {/* Render a log card for each item in the symptoms array */}
            {userSymptoms.map((med, index) => (
              <div key={med + index} className="userSymptomsBadge">
                <p>{med}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No symptoms reported</p>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
