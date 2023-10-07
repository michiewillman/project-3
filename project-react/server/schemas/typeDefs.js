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

  input PatientData {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date!
    generalizedMg: Boolean
    ocularMg: Boolean
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
