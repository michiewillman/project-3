import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Link } from "react-router-dom";
// Authorization middleware
import Auth from "../../utils/auth";
// Global styles
import { themeStyles } from "../../themeStyles";
import { PrimaryButton } from "../../components/Button/Button";

const Login = ({ isLoggedIn, setLoggedIn }) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state change with input change
  const changeState = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submissions
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log("Data after login:", data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // Clear input values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <div>
        <div>
          <h4 style={themeStyles.headline}>Login</h4>
          <div>
            {data ? (
              <p>Success!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={changeState}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={changeState}
                />
                <PrimaryButton text="Submit" type="Submit" />
                <p>Not already registered?</p>
                <Link to="/signup">Sign up</Link>
              </form>
            )}

            {error && <div className="">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
