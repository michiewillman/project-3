import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
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
  query user($userId: ID!) {
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
  query me {
    me {
      _id
      symptoms
    }
  }
`;

export const QUERY_ME_MEDS = gql`
  query me {
    me {
      _id
      medications
    }
  }
`;

export const QUERY_ME_MED_LOGS = gql`
  query medicationLogs {
    medicationLogs {
      _id
      userId
      timestamp
      medicationName
      dosage
    }
  }
`;

export const QUERY_ME_SYMPTOM_LOGS = gql`
  query medicationLogs {
    symptomLogs {
      userId: Patient
      date: Date
      symptomName: String!
      severity: Int
    }
  }
`;
