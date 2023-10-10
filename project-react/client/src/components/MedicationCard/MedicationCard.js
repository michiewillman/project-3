import React from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATION_LOGS } from "../../utils/queries";

const MedicationCard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:userId`
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_MEDICATION_LOGS, {
    // Find meds where userId matches data
    variables: { _id: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <h2 className="">
        {user.medications.length
          ? `You have ${user.medications.length} saved ${
              user.medications.length === 1 ? "medication" : "medications"
            }:`
          : "You have no saved medications."}
      </h2>

      {/* <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <CommentForm thoughtId={thought._id} />
      </div> */}
    </div>
  );
};

export default MedicationCard;
