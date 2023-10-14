import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION_LOG } from "../../utils/mutations";
import { PrimaryButton, SecondaryButton } from "../Button/Button";

import Auth from "../../utils/auth";

const SympLogForm = (props) => {
  const [newLog, setLog] = useState("");

  const [addLog, { error }] = useMutation(ADD_MEDICATION_LOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const data = await addLog({
    //     variables: { userId, newLog },
    //   });

    //   setLog("");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className="logModal">
      <div tabIndex="-1">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {props.title}
              </h3>
              <SecondaryButton text="Close" action={props.closeFunction} />
            </div>
            <div className="p-6 space-y-6">
              <form className="" onSubmit={handleFormSubmit}>
                <div className="col-12 col-lg-9">
                  <label for="medicationName">Medication name</label>
                  <input
                    className="form-input"
                    name="medicationName"
                    type="text"
                    value={newLog.medicationName}
                    onChange={(event) => setLog(event.target.value)}
                  />
                  <label for="dosage">Dosage</label>
                  <input
                    className="form-input"
                    name="dosage"
                    type="text"
                    value={newLog.dosage}
                    onChange={(event) => setLog(event.target.value)}
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
