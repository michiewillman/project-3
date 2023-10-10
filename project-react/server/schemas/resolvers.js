const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const { User, MedicationLog, SymptomLog } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Custom Date scalar type",
    parseValue(value) {
      // Convert the incoming date string or timestamp to a JavaScript Date object
      return new Date(value);
    },
    serialize(value) {
      // Convert the JavaScript Date object to a string for output
      return value.toISOString();
    },
    parseLiteral(ast) {
      // Parse a date string from the GraphQL query AST
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null;
    },
  }),

  Query: {
    // All Users
    users: async () => {
      return User.find();
    },
    // One User
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // Logged in User
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Log in or create an account.");
    },
    // ---  Logged in User's Medications for a specific day ---
    medicationLogs: async (parent, { userId, currentTime }) => {
      return MedicationLog.findOne({ _id: userId, date: currentTime });
    },
    // ---  Logged in User's Symptoms ---
    symptomLogs: async (parent, { userId, currentDate }) => {
      return SymptomLog.findOne({ _id: userId, date: currentDate });
    },
  },

  Mutation: {
    addUser: async (parent, UserData) => {
      const user = await User.create(UserData);
      const token = signToken(user);

      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      // Verify the user entered the right password
      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError("Incorrect password!");
      }

      // Sign + send token if the user's password is correct w/ that user's data
      const token = signToken(user);
      return { token, user };
    },

    // Add medication to User's symptoms property
    addUserMedication: async (parent, { medication }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { medications: medication } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError("Please log in or sign up.");
    },
    // Remove medication from User's symptoms property
    removeUserMedication: async (parent, { medication }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { medications: { medication } } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError("Please log in or sign up.");
    },

    // Add symptom to User's symptoms property
    addUserSymptom: async (parent, { symptom }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { symptoms: symptom } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError("Please log in or sign up.");
    },
    // Remove symptom from User's symptoms property
    removeUserSymptom: async (parent, { symptom }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { symptoms: { symptom } } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError("Please log in or sign up.");
    },

    // Symptom Logs for a specific user
    logSymptom: async (parent, { userId, date, symptomName, severity }) => {
      return SymptomLog.create({
        userId,
        date,
        symptomName,
        severity,
      });
    },
    deleteSymptomLog: async (parent, { logId }) => {
      return SymptomLog.findOneAndDelete({ _id: logId });
    },

    // Medication logs for a specific user
    logMedication: async (
      parent,
      { userId, timestamp, medicationName, dosage }
    ) => {
      return MedicationLog.create({
        userId,
        timestamp,
        medicationName,
        dosage,
      });
    },
    deleteMedicationLog: async (parent, { logId }) => {
      return MedicationLog.findOneAndDelete({ _id: logId });
    },
  },
};

module.exports = resolvers;
