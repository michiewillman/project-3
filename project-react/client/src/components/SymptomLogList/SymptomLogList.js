import { useQuery } from "@apollo/client";
import { QUERY_SYMPTOM_LOGS } from "../../utils/queries";

const SymptomLogList = ({ userId, date }) => {
  const { loading, data } = useQuery(QUERY_SYMPTOM_LOGS);
  const logs = data?.symptomLogs || [];

  if (loading) {
    <p>Loading...</p>;
  }
  return (
    <div>
      <h3>Symptoms logged today</h3>
      {logs &&
        logs.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.thoughtAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                had this thought on {thought.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SymptomLogList;
