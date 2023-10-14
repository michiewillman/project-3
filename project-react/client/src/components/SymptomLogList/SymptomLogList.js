// Use query to get graphQL data
import { useQuery } from "@apollo/client";
import { QUERY_SYMPTOM_LOGS } from "../../utils/queries";
import SymLogCard from "../SymLogCard/SymLogCard";

// import spinner from "../../assets/Spin-1s-200px.gif";

const SymptomLogList = (props) => {
  // Get user's symptoms property (as array)
  const { datetime } = props;
  const { loading, data } = useQuery(QUERY_SYMPTOM_LOGS, {
    variables: { datetime },
  });
  const logData = data?.symptomLogs || [];

  if (logData.length === 0) {
    return <h3>You haven't logged anything today.</h3>;
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="my-2">
      <h2>Symptoms Logged Today</h2>
      {logData.length ? (
        <div className="flex-row">
          {logData.map((log) => (
            <SymLogCard
              key={log._id}
              name={log.symptomName}
              severity={log.severity}
              time={log.datetime}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't logged any symptoms yet.</h3>
      )}
    </div>
  );
};

export default SymptomLogList;
