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
    medications: [MedicationLog]
    symptoms: [SymptomLog]
  }

  type Mutation {
    createUser(user: UserData): userResponse
    addMedication
    addSymptom    
  }
`;

module.exports = typeDefs;
