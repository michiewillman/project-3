const { AuthenticationError } = require("apollo-server-express");
const { Patient, Provider } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // All patients
    patients: async () => {
      return Patient.find();
    },
    // One patient
    patient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId });
    },
    // Patient accessing their own data
    me: async (parent, args, context) => {
      if (context.user) {
        return Patient.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Log in or create an account.");
    },
  },

  Mutation: {
    addPatient: async (parent, PatientData) => {
      const patient = await Patient.create(PatientData);
      const token = signToken(patient);

      return { token, patient };
    },
    addMedication: async (parent, { patientId, medication }) => {
      return Patient.findOneAndUpdate(
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
    removePatient: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeSymptom: async (parent, { symptom }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeMedication: async (parent, { medication }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
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
