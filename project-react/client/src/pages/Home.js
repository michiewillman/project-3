import React from "react";
import { useQuery } from "@apollo/client";
import Day from "../components/Day/Day";
import { QUERY_ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.user || [];

  return (
    <main>
      <div className="">
        <div className="">{loading ? <div>Loading...</div> : <Day />}</div>
      </div>
    </main>
  );
};

export default Home;
