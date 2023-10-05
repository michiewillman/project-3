const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Patient {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    date of birth: Date!
    generalized: Boolean
    ocular: Boolean
    diagnosed date: Date
    medications: [String]
    avilableSymptoms: [String]
    reportedSymptoms: [String]
    diagnosedConditions: [String]
  }

  type Provider {
    firstName: String!
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
    username: String!
    email: String!
    password: String!
    date of birth: Date!
    generalized: Boolean
    ocular: Boolean
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
