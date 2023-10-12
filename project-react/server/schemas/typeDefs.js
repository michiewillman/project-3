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
    datetime: String!
    medicationName: String!
    dosage: String
  }

  type SymptomLog {
    _id: ID!
    userId: ID!
    datetime: String!
    symptomName: String!
    severity: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    getMedicationLogs(datetime: String!): [MedicationLog]
    getSymptomLogs(datetime: String!): [SymptomLog]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    loginUser(email: String!, password: String!): Auth
    addUserSymptom(symptom: String!): User
    removeUserSymptom(symptom: String!): User
    addUserMedication(medication: String!): User
    removeUserMedication(medication: String!): User
    addSymptomLog(symptomName: String!, severity: Int!): SymptomLog
    deleteSymptomLog(logId: ID!): SymptomLog
    addMedicationLog(medicationName: String!, dosage: String): MedicationLog
    deleteMedicationLog(logId: ID!): MedicationLog
  }
`;

module.exports = typeDefs;
