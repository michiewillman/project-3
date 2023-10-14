import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION_LOG } from "../../utils/mutations";

import Auth from "../../utils/auth";

const AddMedLogForm = (props) => {
  const [newLog, setLog] = useState("");

  const [addLog, { error }] = useMutation(ADD_MEDICATION_LOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addLog({
        variables: { userId, newLog },
      });

      setLog("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Medication Logs</h4>

      {Auth.loggedIn() ? (
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

          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add logs. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AddMedLogForm;
