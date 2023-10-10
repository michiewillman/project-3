// import { gql } from "@apollo/client";

// export const ADD_USER = gql`
//   mutation addProfile($name: String!, $email: String!, $password: String!) {
//     addProfile(name: $name, email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// // User's symptoms property
// export const ADD_USER_SYMPTOM = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//     }
//   }
// `;
// export const REMOVE_USER_SYMPTOM = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;

// // User's medications property
// export const ADD_USER_MEDICATION = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//     }
//   }
// `;
// export const REMOVE_USER_MEDICATION = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;
// // Symptom Log entries in its own collection
// export const ADD_SYMPTOM_LOG = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;

// export const DELETE_SYMPTOM_LOG = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;
// // Medication Log entries in its own collection
// export const ADD_MEDICATION_LOG = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;

// export const DELETE_MEDICATION_LOG = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//     }
//   }
// `;
