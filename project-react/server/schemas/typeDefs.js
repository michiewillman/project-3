const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Patient {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    generalizedMg: Boolean
    ocularMg: Boolean
    medications: [String]
    availableSymptoms: [String]
    reportedSymptoms: [String]
    conditions: [String]
  }

  type Provider {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  input PatientData {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    generalizedMg: Boolean
    ocularMg: Boolean
  }

  input ProviderData {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
  }

  type Mutation {
    createPatient(patient: PostData): patientResponse
    createProvider}(provider: ProviderData): providerResponse
    addMedication
    addSymptom
    reportSymptom
    
  }
`;

module.exports = typeDefs;
