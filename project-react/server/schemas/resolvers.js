const { AuthenticationError } = require("apollo-server-express");
const { User, SymptomLog, MedicationLog } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
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
    // ---  Logged in User's Symptoms ---
    symptoms: async (parent, { userId, currentDate }) => {
      return SymptomLog.findOne({ _id: userId }).populate("medications");
    },
    // ---  Logged in User's Medications ---
    medications: async (parent, { patientId, currentDate }) => {
      return MedicationLog.findOne({ _id: patientId }).populate("medications");
    },
  },

  Mutation: {
    addUser: async (parent, UserData) => {
      const user = await User.create(UserData);
      const token = signToken(user);

      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Add symptom to User's symptoms property
    addUserSymptom: async (parent, { userId, symptom }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { symptoms: symptom },
        },
        {
          new: true,
          runValidators: true,
        }
      );
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
    // Add medication to User's symptoms property
    addUserMedication: async (parent, { userId, medication }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { medications: medication },
        },
        {
          new: true,
          runValidators: true,
        }
      );
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
    userLogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
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
    logSymptom: async (parent, { userId, date, symptomName, severity }) => {
      return SymptomLog.create({ userId, date, symptomName, severity });
    },
    // --- Medications ---
    logMedication: async (parent, { userId, date, symptomName, severity }) => {
      return SymptomLog.create({ userId, date, symptomName, severity });
    },
  },
};

module.exports = resolvers;
