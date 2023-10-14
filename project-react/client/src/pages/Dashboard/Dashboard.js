import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_SYMPTOM_LOG } from "../../utils/mutations";
import SymptomLogList from "../../components/SymptomLogList/SymptomLogList";
import MedicationLogList from "../../components/MedicationLogList/MedicationLogList";
import { PrimaryButton } from "../../components/Button/Button";
import Calendar from "../../components/Calendar/Calendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { themeStyles } from "../../themeStyles";
import UserMeds from "../../components/UserMeds/UserMeds";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.user || {};

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [addSymptomLog, { error }] = useMutation(ADD_SYMPTOM_LOG);

  return (
    <main>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <Calendar onDateSelected={(date) => setSelectedDate(date)} />
          <MedicationLogList datetime={selectedDate} />
          <UserMeds med={user.medications} />
          {/* <PrimaryButton text={"Add Medication"} action={handleLogSymptom} /> */}
          <SymptomLogList datetime={selectedDate} />
          {/* <PrimaryButton text={"Log Symptom"} action={handleLogSymptom} /> */}
        </div>
      </LocalizationProvider>
    </main>
  );
};

export default Dashboard;
