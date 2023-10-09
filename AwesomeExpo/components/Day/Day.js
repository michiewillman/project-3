import { useState } from "react";
import { date, setDate } from "../../utils/DateContext";

const Day = (patientId) => {
  // Fetch patient where id === patientId & date matches date

  // const patient = response;
  const [range, setRange] = useState(0);

  return (
    // <View>
    //   {/* Set icon image to interaact with the severity chosen (ex: create an array of objects and the index corresponds to the icon --> then set the range values to correspond, or use switch case? ) */}
    //   <Text>{range}</Text>
    //   <Slider
    //     style={{ width: 300, height: 50 }}
    //     onValueChange={(value) => setRange(value)}
    //     minimumValue={0}
    //     maximumValue={5}
    //     thumbTintColor="black"
    //   />
    // </View>

    <div>
      <p>Placeholder for severity range</p>
    </div>
    // Current Date

    // Overall mood: mentalState with icon

    // Reported symptoms

    // Button --> Report new symptom --> choose severity --> adds symptom data to the list
    // if name of symptom not in user's reported symptoms, add it
    // update db date data
    // update state

    // Medications as buttons --> take medication
    // -- saves medication taken at current date/time
    // -- update db date data
    // -- update state
    // -- render all medication reports for current date
  );
};

export default Day;
