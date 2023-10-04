import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import Auth from "../utils/auth";

const MyAccount = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/account" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return <h4>Signup or login.</h4>;
  }

  return (
    <div>
      <h2>
        {profileId ? `${profile.name}'s` : "Your"} friends have endorsed these
        skills...
      </h2>

      {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

      <div>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default MyAccount;
