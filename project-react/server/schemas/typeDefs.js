const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Patient {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    medications: [Medication]
    symptoms: [Symptom]
  }

  type Medication {
    name: String
    dosage: String
    patientId: ID!
    logs: [String]
  }

  type Symptom {
    symptomName: String
    patientId: Patient
  }

  type Auth {
    token: ID!
    patient: Patient
    provider: Provider
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
    patients: [Patient]
    patient(patientId: ID!): Patient
    medications: [Medication]
    symptoms: [Symptom]
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
