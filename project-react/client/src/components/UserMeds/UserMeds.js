import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION_LOG } from "../../utils/mutations";
import { SecondaryButton } from "../../components/Button/Button";
// Use global User context
import { useUserContext } from "../../utils/UserContext";

const UserMeds = ({ medications }) => {
  const user = useUserContext();

  // Use the mutation to log the user's symptom
  const [addMedLog, { error }] = useMutation(ADD_MEDICATION_LOG);

  const handleLogMedication = async () => {
    try {
      // Create a symptom log
      const { data } = await addMedLog({
        variables: { _id: user._id },
      });
    } catch (err) {
      console.error(err);
    }
  };

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
            <div>
              <SecondaryButton text={"Take Med"} action={handleLogMedication} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserMeds;
