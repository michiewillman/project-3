import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($input: UserData) {
    addUser(input: $input) {
      token
      user {
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
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
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
  }
`;

// User's symptoms property
export const ADD_USER_SYMPTOM = gql`
  mutation addUserSymptom($symptom: String!) {
    addUserSymptom(symptom: $symptom) {
      token
      user {
        _id
        symptoms
      }
    }
  }
`;
export const REMOVE_USER_SYMPTOM = gql`
  mutation removeUserSymptom($symptom: String!) {
    removeUserSymptom(symptom: $symptom) {
      token
      user {
        _id
        symptoms
      }
    }
  }
`;

// User's medications property
export const ADD_USER_MEDICATION = gql`
  mutation addUserMedication($medication: String!) {
    addUserMedication(medication: $medication) {
      token
      user {
        _id
        medications
      }
    }
  }
`;
export const REMOVE_USER_MEDICATION = gql`
  mutation removeUserMedication($medication: String!) {
    removeUserMedication(medication: $medication) {
      token
      user {
        _id
        medications
      }
    }
  }
`;

// Symptom Log entries in its own collection
export const ADD_SYMPTOM_LOG = gql`
  mutation addSymptomLog(
    $userId: ID!
    $date: Date!
    $symptomName: String!
    $severity: Int
  ) {
    addSymptomLog(
      userId: $userId
      date: $date
      symptomName: $symptomName
      severity: $severity
    ) {
      _id
      userId
      symptomName
      date
      severity
    }
  }
`;

export const DELETE_SYMPTOM_LOG = gql`
  mutation deleteSymptomLog($logId: ID!) {
    deleteSymptomLog(logId: $logId) {
      _id
    }
  }
`;

// Medication Log entries in its own collection
export const ADD_MEDICATION_LOG = gql`
  mutation addMedicationLog(
    $userId: ID!
    $timestamp: Date!
    $medicationName: String!
    $dosage: String
  ) {
    addMedicationLog(
      userId: $userId
      timestamp: $timestamp
      medicationName: $medicationName
      dosage: $dosage
    ) {
      _id
      userId
      timestamp
      medicationName
      dosage
    }
  }
`;

export const DELETE_MEDICATION_LOG = gql`
  mutation deleteMedicationLog($logId: ID!) {
    deleteMedicationLog(logId: $logId) {
      _id
    }
  }
`;
