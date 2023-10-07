const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Date of birth
  dob: {
    type: Date,
    required: true,
  },
  // Does the patient have generalized MG?
  generalizedMg: {
    type: Boolean,
    required: true,
  },
  // Does the patient have ocular MG?
  ocularMg: {
    type: Boolean,
    required: true,
  },
  // Date of MG diagnosis (optional)
  diagnosedDate: {
    type: Date,
    required: true,
  },
  // List of patient's current medications
  medications: [
    {
      type: String,
      trim: true,
    },
  ],
  // All items in the symptom checklist
  availableSymptoms: [
    {
      type: String,
      trim: true,
    },
  ],
  // All symptoms the patient has reported experiencing
  reportedSymptoms: [
    {
      type: String,
      trim: true,
    },
  ],
  // Patient's known medical conditions other than MG
  conditions: [
    {
      type: String,
      trim: true,
    },
  ],
  logs: [
    {
      type: String,
      trim: true,
    },
  ],
});

// Export the Patient object made from the schema
const Patient = model("Patient", patientSchema);

module.exports = Patient;
