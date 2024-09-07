// Imports
import { gql } from "apollo-server-micro";

// Schemas
export const typeDefs = gql`
  type User {
    id: String
    name: String
    username: String
    email: String
    password: String
    bio: String
    profileImage: String
    thumbnailImage: String
  }

  type Query {
    users: [User]!
  }
`;
