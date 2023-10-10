const { gql } = require("apollo-server-express");

// In order to use Date as a type, we need to establish a scalar (new rule) for date

const typeDefs = gql`
  scalar Date

  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    medications: [String]
    symptoms: [String]
  }

  type MedicationLog {
    userId: ID!
    timestamp: Date
    medicationName: String!
    dosage: String
  }

  type SymptomLog {
    userId: ID!
    date: Date
    symptomName: String!
    severity: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input UserData {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    symptoms: [String]
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    medicationLogs(userId: ID!, currentDate: Date): [MedicationLog]
    symptomLogs(userId: ID!, currentTime: Date): [SymptomLog]
  }

  type Mutation {
    addUser(user: UserData): Auth
    loginUser(email: String!, password: String!): Auth
    addUserSymptom(symptom: String!): User
    removeUserSymptom(symptom: String!): User
    addUserMedication(medication: String!): User
    removeUserMedication(medication: String!): User
    logSymptom(
      userId: ID!
      date: Date!
      symptomName: String!
      severity: Int
    ): SymptomLog
    deleteSymptomLog(logId: ID!): SymptomLog
    logMedication(
      userId: ID!
      timestamp: Date!
      medicationName: String!
      dosage: String
    ): MedicationLog
    deleteMedicationLog(logId: ID!): MedicationLog
  }
`;

module.exports = typeDefs;
