import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Global styles
import "./App.css";
// Pass user context down to all children in App
import UserProvider from "./utils/UserContext";

// Pages
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
      <UserProvider>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              {isLoggedIn ? (
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/account" element={<MyAccount />} />
                  {/* <Route path="/login" element={<Logout />} /> */}
                </Routes>
              ) : (
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              )}
            </div>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
