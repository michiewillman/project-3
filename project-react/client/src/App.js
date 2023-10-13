import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Global styles
import { themeStyles } from "./themeStyles.js";
// Pass user context down to all children in App
// import UserProvider from "./utils/UserContext";

// Page Components
import Entry from "./pages/Entry/entry";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAccount from "./pages/MyAccount/MyAccount";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      {/* Keeps track of the user global state */}
      {/* <UserProvider> */}
      <Router>
        <div>
          <Header />
          <div className="container">
            {isLoggedIn ? (
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/account" element={<MyAccount />} />
                {/* <Route path="/login" element={<Logout />} /> */}
                <Route
                  path="*"
                  element={
                    <h1 style={themeStyles.title}>404: Page Not Found</h1>
                  }
                />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/account" element={<Login />} />
                <Route
                  path="*"
                  element={
                    <h1 style={themeStyles.title}>404: Page Not Found</h1>
                  }
                />
              </Routes>
            )}
          </div>
          <Footer />
        </div>
      </Router>
      {/* </UserProvider> */}
    </ApolloProvider>
  );
}

export default App;
