const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    userId: Patient
    date: Date
    symptomName: String!
    severity: Int
  }

  type Auth {
    token: ID!
    patient: Patient
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
