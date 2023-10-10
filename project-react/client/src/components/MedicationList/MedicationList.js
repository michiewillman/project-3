// Use query to get graphQL data
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATION_LOGS } from "../../utils/queries";
import SingleMedication from "../MedicationCard/MedicationCard";

const MedicationList = (userId) => {
  // Get user's medications property (as array)
  const { loading, data } = useQuery(QUERY_MEDICATION_LOGS, {
    variables: { _id: userId },
  });
  const medications = data?.user;

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

  return (
    <ul className="list-group">
      {medications.map((med) => (
        <SingleMedication key={med._id} medication={med} />
      ))}
    </ul>
  );
};

export default MedicationList;

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
