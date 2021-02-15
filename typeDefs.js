const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    authors: [Author!]!
    books: [Book!]!
    users: [User!]!
    book(id: ID!): Book
    user(id: ID!): User
    author(id: ID!): Author
  }
  type Author {
    id: ID!
    name: String!
    bio: String!
    photo: Image!
    books: [Book!]!
  }
  type Book {
    id: ID!
    title: String!
    cover: Image!
    description: String!
    author: Author!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    info: String!
    avatar: Avatar!
  }
  type Image {
    url: String!
  }
  type Avatar {
    image: Image!
    color: String!
  }
`;

module.exports = typeDefs;
