import React, { useState } from "react";
import { Link } from "react-router-dom";
// Hook from Apollo Client to use mutations
import { useMutation } from "@apollo/client";
// GraphQL mutation
import { ADD_USER } from "../../utils/mutations";
// User authentication middleware
import Auth from "../utils/auth";
import Home from "./Home";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // Update the state of the input when user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            Create An Account
          </h4>
          <div className="card-body">
            {data ? (
              <Home />
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Choose a username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input"
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
