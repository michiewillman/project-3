// Use query to get graphQL data
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MEDICATION_LOGS } from "../../utils/queries";
import { DELETE_MEDICATION_LOG } from "../../utils/mutations";
import MedLogCard from "../MedLogCard/MedLogCard";
import Loading from "../Loading/Loading";

const MedicationLogList = (props) => {
  const [deleteMedicationLog, { error }] = useMutation(DELETE_MEDICATION_LOG);

  // Get med logs from user from date passed in
  const { datetime } = props;
  const { loading, data } = useQuery(QUERY_MEDICATION_LOGS, {
    variables: { datetime },
  });
  const logData = data?.medicationLogs || [];

  const handleDeleteLog = async (logId) => {
    try {
      const { data } = await deleteMedicationLog({
        variables: { _id: logId },
      });
    } catch (err) {
      console.error("GraphQL Error: ", err);
    }
  };

  // if (logData.length === 0) {
  //   return <h3>You haven't logged anything today.</h3>;
  // }

  // TODO: Update/add new medication to patient's medications array

  return (
    <div className="my-2">
      <h2>Medication</h2>
      {logData.length ? (
        <div className="flex-row">
          {logData.map((log) => (
            <MedLogCard
              key={log._id + log.medicationName}
              logId={log._id}
              name={log.medicationName}
              dosage={log.dosage}
              time={log.datetime}
              handleDeleteLog={handleDeleteLog}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any medications yet.</h3>
      )}
      {/* <button onClick={}></button> */}
      {/* Button "Take Medication" renders the AddMedLogForm modal / component */}
      <Loading loading={loading} />
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
