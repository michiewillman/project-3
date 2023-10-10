import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query user {
    users {
      _id
      firstName
      lastName
      email
      password
      dob
      medications
      symptoms
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      password
      dob
      medications
      symptoms
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      password
      dob
    }
  }
`;

export const QUERY_ME_SYMPTOMS = gql`
  query getUserSymptoms {
    user(_id: $userId) {
      _id
      symptoms
    }
  }
`;

export const QUERY_ME_MEDS = gql`
  query getUserMeds {
    user(_id: $userId) {
      _id
      medications
    }
  }
`;

export const QUERY_ME_MED_LOGS = gql`
  query getMedicationLogs {
    medicationLogs(medicationLogsId: $medicationLogsId) {
      _id
      userId
      timestamp
      medicationName
      dosage
    }
  }
`;

export const QUERY_ME_SYMPTOM_LOGS = gql`
  query getSymptomLogs {
    symptomLogs {
      userId: Patient
      date: Date
      symptomName: String!
      severity: Int
    }
  }
`;
