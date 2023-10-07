const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    medications: [Medication]
    symptoms: [Symptom]
  }

  type Medication {
    patientId: ID!
    timestamp: Date
    medicationName: String!
    dosage: String
  }

  type Symptom {
    patientId: Patient
    date: Date
    symptomName: String
    severity: Int
  }

  type Auth {
    token: ID!
    patient: Patient
    provider: Provider
  }

  input UserData {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    generalizedMg: Boolean
    ocularMg: Boolean
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    medications: [Medication]
    symptoms: [Symptom]
  }

  type Mutation {
    createUser(user: UserData): userResponse
    addMedication
    addSymptom    
  }
`;

module.exports = typeDefs;
