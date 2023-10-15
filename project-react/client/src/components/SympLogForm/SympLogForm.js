import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_SYMPTOM_LOG } from "../../utils/mutations";
import { PrimaryButton, SecondaryButton } from "../Button/Button";

import Auth from "../../utils/auth";

const SympLogForm = (props) => {
  const [formState, setFormState] = useState({ symptomName: "", severity: 0 });

  const [addSymptomLog, { error }] = useMutation(ADD_SYMPTOM_LOG);

  // Update state change with input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogSymptom = async (event) => {
    event.preventDefault();

    const user = Auth.getUser();
    const severityNum = Number(formState.severity);
    console.log(severityNum);

    try {
      const data = await addSymptomLog({
        variables: {
          symptomName: formState.symptomName,
          severity: severityNum,
          userId: user.data._id,
        },
      });

      // Clear the form by resetting the state
      setFormState({ symptomName: "", severity: 0 });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="logModal">
      <div tabIndex="-1">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3>Log a Symptom</h3>
              <SecondaryButton text="Close" action={props.closeFunction} />
            </div>
            <div className="p-6 space-y-6">
              <form onSubmit={handleLogSymptom}>
                <div className="col-12 col-lg-9">
                  <label htmlFor="symptomName">Symptom</label>
                  <input
                    className="formInput"
                    name="symptomName"
                    type="text"
                    placeholder="enter symptom name"
                    value={formState.symptomName}
                    onChange={(event) => handleInputChange(event)}
                  />
                  <label htmlFor="severity">Severity</label>
                  <input
                    className="formInput"
                    name="severity"
                    type="number"
                    value={formState.severity}
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <PrimaryButton
                  text="Submit"
                  type="Submit"
                  action={props.renderParent}
                />
                {error && (
                  <div className="col-12 my-3 bg-danger text-white p-3">
                    {error.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SympLogForm;
