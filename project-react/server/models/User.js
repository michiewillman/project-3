const { Schema, model } = require("mongoose");
// import models
const MedicationLog = require("./MedicationLog");
const SymptomLog = require("./SymptomLog");

const userSchema = new Schema({
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
  // User's current medications
  medications: [MedicationLog],
  // All symptoms available in the user's symptom checklist
  symptoms: [SymptomLog],
});

// Export the Patient object made from the schema
const User = model("User", userSchema);

module.exports = User;
