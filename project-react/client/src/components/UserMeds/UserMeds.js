import React from "react";

const UserMeds = ({ medications }) => {
  return (
    <div>
      <h2>
        {medications.length
          ? `You have ${medications.length} saved ${
              medications.length === 1 ? "medication" : "medications"
            }:`
          : "You have no saved medications."}
      </h2>
      {medications &&
        medications.map((med, index) => (
          <div key={`med-${index}`}>
            <h4>{medications.name}</h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserMeds;
