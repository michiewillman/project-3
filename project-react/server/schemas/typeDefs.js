const { gql } = require("apollo-server-express");

// In order to use Date as a type, we need to establish a scalar (new rule) for date

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    medications: [String]
    symptoms: [String]
  }

  type MedicationLog {
    _id: ID!
    userId: ID!
    timestamp: Date
    medicationName: String!
    dosage: String
  }

  type SymptomLog {
    _id: ID!
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
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    medicationLogs(userId: ID!, date: Date): [MedicationLog]
    symptomLogs(userId: ID!, timestamp: Date): [SymptomLog]
  }

  type Mutation {
    addUser(input: UserData): Auth
    loginUser(email: String!, password: String!): Auth
    addUserSymptom(symptom: String!): Auth
    removeUserSymptom(symptom: String!): Auth
    addUserMedication(medication: String!): Auth
    removeUserMedication(medication: String!): Auth
    addSymptomLog(
      userId: ID!
      date: Date!
      symptomName: String!
      severity: Int
    ): SymptomLog
    deleteSymptomLog(logId: ID!): SymptomLog
    addMedicationLog(
      userId: ID!
      timestamp: Date!
      medicationName: String!
      dosage: String
    ): MedicationLog
    deleteMedicationLog(logId: ID!): MedicationLog
  }
`;

module.exports = typeDefs;
