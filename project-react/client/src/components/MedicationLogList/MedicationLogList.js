// Use query to get graphQL data
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATION_LOGS } from "../../utils/queries";
import MedLogCard from "../MedLogCard/MedLogCard";
// import spinner from "../../assets/Spin-1s-200px.gif";

const MedicationLogList = ({ datetime }) => {
  // Get user's medications property (as array)
  const { loading, data } = useQuery(QUERY_MEDICATION_LOGS, {
    variables: { datetime },
  });
  const logs = data?.user || {};
  console.log("query of logs", logs);

  if (!logs.length) {
    return <h3>You haven't logged anything today.</h3>;
  }

  // TODO: Update/add new medication to patient's medications array

  return (
    <div className="my-2">
      <h2>Medication</h2>
      <p>{logs}</p>
      {logs.length ? (
        <div className="flex-row">
          {logs.map((log) => (
            <MedLogCard
              key={log._id}
              name={log.medicationName}
              dosage={log.dosage}
              time={log.datetime}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any medications yet.</h3>
      )}
      {/* <button onClick={}></button> */}
      {/* Button "Take Medication" renders the AddMedLogForm modal / component */}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
};

export default MedicationLogList;

// Future Development code: REACT NATIVE CONFIRM
//   Alert.alert("Confirm delete", "Are you sure you want to delete this log?", [
//     {
//       text: "Cancel",
//       onPress: () => console.log("Cancel Pressed"),
//       style: "cancel",
//     },
//     {
//       text: "DELETE LOG",
//       onPress: () => console.log("Delete pressed"),
//     },
//   ]);
// };
