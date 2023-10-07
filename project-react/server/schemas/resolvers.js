const { AuthenticationError } = require("apollo-server-express");
const { Patient, Provider } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // ---  Patients ---
    // All Patients
    patients: async () => {
      return Patient.find();
    },
    // One Patient
    patient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId }).populate("medications");
    },
    // Logged in Patient
    me: async (parent, args, context) => {
      if (context.user) {
        return Patient.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Log in or create an account.");
    },
    // ---  Symptoms ---

    // ---  Medications ---
    
  },

  Mutation: {
    addPatient: async (parent, PatientData) => {
      const patient = await Patient.create(PatientData);
      const token = signToken(patient);

      return { token, patient };
    },
    removePatient: async (parent, args, context) => {
      if (context.user) {
        return Patient.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addSymptomToList: async (parent, { patientId, skill }) => {
      return Patient.findOneAndUpdate(
        { _id: patientId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addReportedSymptom: async (parent, { patientId, skill }) => {
      return Patient.findOneAndUpdate(
        { _id: patientId },
        {
          $addToSet: { reportedSymptoms: symptom },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    patientLogin: async (parent, { email, password }) => {
      const patient = await Profile.findOne({ email });

      if (!patient) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addSymptom: async (parent, { patientId, skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: patientId },
          {
            $addToSet: { skills: skill },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeSymptom: async (parent, { symptom }, context) => {
      if (context.user) {
        return Symptom.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // --- Medications ---
    addMedication: async (parent, { patientId, medication }) => {
      return Medication.findOneAndUpdate(
        { _id: patientId },
        {
          $addToSet: { medications: medication },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMedication: async (parent, { medication }, context) => {
      if (context.user) {
        return Medication.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
