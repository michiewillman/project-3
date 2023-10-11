// Use query to get graphQL data
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATION_LOGS } from "../../utils/queries";
import MedLogCard from "../MedLogCard/MedLogCard";

const MedicationLogList = ({ userId }) => {
  // Get user's medications property (as array)
  const { loading, data } = useQuery(QUERY_MEDICATION_LOGS, {
    variables: { _id: userId },
  });
  const logs = data?.user || {};
  console.log(logs);

  // if empty medications array, exit func
  // Otherwise proceed...

  // Handle "Take Medication" button click
  // const handleTakeMedication = (event) => {
  //   // Set medication as the buton's target value (name of medicine)
  //   // Not sure if below is correct
  //   const medication = event.target.value;
  // };
  // -- add new medication to array
  // -- Update db of patient's medications
  // -- Update state of patient's medications
  // const deleteMedLog = () => {

  if (loading) {
    <p>Loading...</p>;
  }
  return (
    <div>
      <h2>Medication Logs</h2>
      <div className="list-group">
        {logs.map((log) => (
          <MedLogCard key={log._id} />
        ))}
      </div>
    </div>
  );
};

export default MedicationLogList;

//  use flatlist for logs?
//  Animated.sequence(log cards)

// hidden input value = the medication log's id (in order to pass that in to remove medication by this id)

// Render all logged medication entries for current date
// {medication} taken at {time}

// Remove medication log button --> deleteMedLog

// Medication Cards with...
// Medication Name
// Dosage
// Button ---> Take Medication

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
