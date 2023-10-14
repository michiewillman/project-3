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
  const changeState = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogSymptom = async (event) => {
    event.preventDefault();

    try {
      const data = await addSymptomLog({
        variables: { ...formState },
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
              <form className="" onSubmit={handleLogSymptom}>
                <div className="col-12 col-lg-9">
                  <label for="symptomName">Symptom</label>
                  <input
                    className="form-input"
                    name="symptomName"
                    type="text"
                    value={formState.symptomName}
                    onChange={(event) => changeState(event)}
                  />
                  <label for="severity">Severity</label>
                  <input
                    className="form-input"
                    name="severity"
                    type="number"
                    value={formState.severity}
                    onChange={(event) => changeState(event)}
                  />
                </div>
                <PrimaryButton text="Submit" type="Submit" />
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
