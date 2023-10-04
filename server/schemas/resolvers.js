const { AuthenticationError } = require("apollo-server-express");
const { Patient, Provider } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    patients: async () => {
      return Patient.find();
    },

    patient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Patient.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You must be logged in.");
    },
  },

  Mutation: {
    addPatient: async (parent, { name, email, password }) => {
      const patient = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    addMedication: async (parent, { patientId, skill }) => {
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
    },
    addSymptomToList: async (parent, { patientId, skill }) => {
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
    },
    addReportedSymptom: async (parent, { patientId, skill }) => {
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
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
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
    removeSymptom: async (parent, { skill }, context) => {
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
