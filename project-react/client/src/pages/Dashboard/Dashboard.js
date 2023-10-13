import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_SYMPTOM_LOG } from "../../utils/mutations";
import SymptomLogList from "../../components/SymptomLogList/SymptomLogList";
import MedicationLogList from "../../components/MedicationLogList/MedicationLogList";
import { PrimaryButton } from "../../components/Button/Button";
import UserMeds from "../../components/UserMeds/UserMeds";
import Calendar from "../../components/Calendar/Calendar";

// Set up Date library adapter for calendar
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Global styles
import { themeStyles } from "../../themeStyles";

//   {/* Set icon image to interaact with the severity chosen (ex: create an array of objects and the index corresponds to the icon --> then set the range values to correspond, or use switch case? ) */}
//   <Text>{range}</Text>
//   <Slider
//     style={{ width: 300, height: 50 }}
//     onValueChange={(value) => setRange(value)}
//     minimumValue={0}
//     maximumValue={5}
//     thumbTintColor="black"

// Button --> Report new symptom --> choose severity --> adds symptom data to the list
// if name of symptom not in user's reported symptoms, add it
// update db date data
// update state

// Medications as buttons --> take medication
// -- saves medication taken at current date/time
// -- update db date data
// -- update state
// -- render all medication reports for current date

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.user || [];

  // Use the mutation to log the user's symptom
  const [addSymptomLog, { error }] = useMutation(ADD_SYMPTOM_LOG);

  const handleLogSymptom = async (event) => {
    try {
      // Create a symptom log
      const { data } = await addSymptomLog({
        variables: { _id: user._id },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    <p>Loading...</p>;
  }
  return (
    <main>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Calendar />
            <MedicationLogList />
            <p style={themeStyles.text}>Take Your Medicine</p>
            <UserMeds medications={user.medications} />
            <PrimaryButton text={"Add Medication"} action={handleLogSymptom} />
            <p style={themeStyles.text}>Symptoms</p>
            <SymptomLogList symptoms={user.symptoms} />
            <PrimaryButton text={"Log Symptom"} action={handleLogSymptom} />
          </div>
        )}
      </LocalizationProvider>
    </main>
  );
};

export default Dashboard;
