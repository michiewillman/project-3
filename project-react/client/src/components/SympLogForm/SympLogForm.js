import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION_LOG } from "../../utils/mutations";
import "./SympLogForm.css";

import Auth from "../../utils/auth";

const SympLogForm = (props) => {
  return (
    <div className="logModal">
      <div tabIndex="-1">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {props.title}
              </h3>
              <button onClick={props.closeFunction}>Close modal</button>
            </div>
            <div className="p-6 space-y-6">
              <img src={props.gif} alt="Exercise GIF" />

              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Body Part:
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Equipment:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SympLogForm;
