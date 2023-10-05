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
    diagnosedDate: Date
    medications: [String]
    avilableSymptoms: [String]
    reportedSymptoms: [String]
    conditions: [String]
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
    firstName: String
    lastName: String
    email: String!
    password: String
    date of birth: Date
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
