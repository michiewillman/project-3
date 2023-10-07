// Medication Cards (with Take Medication button)

export default Medication = (patientId) => {
  // Fetch patient where id === patientId
  // Get their list of medications
  const patient = response;
  // const medications = current array of medications

  // if empty medications array, exit func
  // Otherwise proceed...

  // Handle "Take Medication" button click
  const handleTakeMedication = (event) => {
    // Set medication as the buton's target value (name of medicine)
    // Not sure if below is correct
    const medication = e.target.value;

    // -- add new medication to array
    // -- Update db of patient's medications
    // -- Update state of patient's medications
  };

  return;
  // hidden input value = the medication log's id (in order to pass that in to remove medication by this id)

  // Render all logged medication entries for current date
  // {medication} taken at {time}

  // Medication Cards with...
  // Medication Name
  // Dosage
  // Button ---> Take Medication
};
