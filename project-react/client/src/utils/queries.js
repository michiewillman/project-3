import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
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
      medications
      symptoms
    }
  }
`;

export const QUERY_MEDICATION_LOGS = gql`
  query getMedicationLogs($datetime: String!) {
    medicationLogs(datetime: $datetime) {
      _id
      userId
      datetime
      medicationName
      dosage
    }
  }
`;

export const QUERY_SYMPTOM_LOGS = gql`
  query getSymptomLogs($userId: ID!, $timestamp: Date) {
    symptomLogs(userId: $userId, timestamp: $timestamp) {
      _id
      date
      symptomName
      severity
    }
  }
`;
