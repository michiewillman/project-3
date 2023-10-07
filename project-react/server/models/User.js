const { Schema, model } = require("mongoose");
// import models
const Medication = require("./Book");

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

  // Future Development: Does the patient have generalized MG?
  // generalizedMg: {
  //   type: Boolean,
  //   required: true,
  // },
  // // Does the patient have ocular MG?
  // ocularMg: {
  //   type: Boolean,
  //   required: true,
  // },

  // List of patient's current medications - update when patient adds new medication or removes mediation
  medications: [
    {
      type: String,
      trim: true,
    },
  ],
  // All items in the symptom checklist - patient can add custom
  symptoms: [
    {
      type: String,
      trim: true,
    },
  ],
  // Future Development: All symptoms the patient has reported experiencing (for research purposes)
  // reportedSymptoms: [
  //   {
  //     type: String,
  //     trim: true,
  //   },
  // ],
});

// Export the Patient object made from the schema
const Patient = model("Patient", userSchema);

module.exports = Patient;
