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
    customSymptoms: [String]
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

  type Query {
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
